import { supabase } from './supabase';
import { Database } from '../types/supabase';
import { RealtimeChannel, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Job = Database['public']['Tables']['jobs']['Row'];
type Application = Database['public']['Tables']['applications']['Row'];

type JobsPayload = RealtimePostgresChangesPayload<Job>;
type ApplicationsPayload = RealtimePostgresChangesPayload<Application>;

export const api = {
  // Auth functions
  auth: {
    signUp: async (email: string, password: string, fullName: string) => {
      const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
      
      if (authError) return { data: null, error: authError };
      
      if (authData.user) {
        const { error: profileError } = await supabase.from('profiles').insert({
          id: authData.user.id,
          email,
          full_name: fullName,
          created_at: new Date().toISOString(),
          skills: [],
        });

        if (profileError) {
          // If profile creation fails, we should delete the auth user
          await supabase.auth.admin.deleteUser(authData.user.id);
          return { data: null, error: profileError };
        }
      }

      return { data: authData, error: null };
    },
    signIn: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (!error && data.user) {
        // Update the login count in the profiles table
        await supabase
          .from('profiles')
          .update({ 
            login_count: supabase.rpc('increment_login_count'),
            last_login: new Date().toISOString()
          })
          .eq('id', data.user.id);
      }
      
      return { data, error };
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      return { error };
    },
  },

  // Profile functions
  profiles: {
    get: async (userId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      return { data: data as Profile, error };
    },
    update: async (userId: string, profile: Partial<Profile>) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('id', userId);
      return { data, error };
    },
    list: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*');
      return { data: data as Profile[], error };
    },
  },

  // Job functions
  jobs: {
    create: async (job: Omit<Job, 'id' | 'created_at'>) => {
      const { data, error } = await supabase
        .from('jobs')
        .insert(job)
        .select()
        .single();
      return { data: data as Job, error };
    },
    get: async (jobId: string) => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();
      return { data: data as Job, error };
    },
    list: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      return { data: data as Job[], error };
    },
    update: async (jobId: string, job: Partial<Job>) => {
      const { data, error } = await supabase
        .from('jobs')
        .update(job)
        .eq('id', jobId);
      return { data, error };
    },
    delete: async (jobId: string) => {
      const { error } = await supabase
        .from('jobs')
        .delete()
        .eq('id', jobId);
      return { error };
    },
  },

  // Application functions
  applications: {
    create: async (application: Omit<Application, 'id' | 'created_at'>) => {
      const { data, error } = await supabase
        .from('applications')
        .insert(application)
        .select()
        .single();
      return { data: data as Application, error };
    },
    get: async (applicationId: string) => {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('id', applicationId)
        .single();
      return { data: data as Application, error };
    },
    listByJob: async (jobId: string) => {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('job_id', jobId);
      return { data: data as Application[], error };
    },
    listByApplicant: async (applicantId: string) => {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('applicant_id', applicantId);
      return { data: data as Application[], error };
    },
    updateStatus: async (applicationId: string, status: string) => {
      const { data, error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', applicationId);
      return { data, error };
    },
  },

  // Real-time subscriptions
  subscriptions: {
    onJobsChange: (callback: (payload: JobsPayload) => void): RealtimeChannel => {
      return supabase
        .channel('jobs_channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'jobs' }, callback)
        .subscribe();
    },
    onApplicationsChange: (callback: (payload: ApplicationsPayload) => void): RealtimeChannel => {
      return supabase
        .channel('applications_channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, callback)
        .subscribe();
    },
  },
};