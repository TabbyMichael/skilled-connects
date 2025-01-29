export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          avatar_url: string | null
          title: string | null
          bio: string | null
          skills: string[]
          hourly_rate: number | null
          availability: string | null
          location: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          avatar_url?: string | null
          title?: string | null
          bio?: string | null
          skills?: string[]
          hourly_rate?: number | null
          availability?: string | null
          location?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          avatar_url?: string | null
          title?: string | null
          bio?: string | null
          skills?: string[]
          hourly_rate?: number | null
          availability?: string | null
          location?: string | null
        }
      }
      jobs: {
        Row: {
          id: string
          created_at: string
          title: string
          company: string
          description: string
          location: string
          type: string
          salary_range: string
          skills_required: string[]
          posted_by: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          company: string
          description: string
          location: string
          type: string
          salary_range: string
          skills_required: string[]
          posted_by: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          company?: string
          description?: string
          location?: string
          type?: string
          salary_range?: string
          skills_required?: string[]
          posted_by?: string
          status?: string
        }
      }
      applications: {
        Row: {
          id: string
          created_at: string
          job_id: string
          applicant_id: string
          cover_letter: string | null
          status: string
        }
        Insert: {
          id?: string
          created_at?: string
          job_id: string
          applicant_id: string
          cover_letter?: string | null
          status?: string
        }
        Update: {
          id?: string
          created_at?: string
          job_id?: string
          applicant_id?: string
          cover_letter?: string | null
          status?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}