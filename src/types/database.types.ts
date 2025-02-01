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
          role: string
          languages: string[]
          portfolio_links: string[]
          education: Json[]
          certifications: Json[]
          expertise: string[]
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
          role?: string
          languages?: string[]
          portfolio_links?: string[]
          education?: Json[]
          certifications?: Json[]
          expertise?: string[]
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
          role?: string
          languages?: string[]
          portfolio_links?: string[]
          education?: Json[]
          certifications?: Json[]
          expertise?: string[]
        }
      }
      projects: {
        Row: {
          id: string
          client_id: string
          title: string
          description: string
          budget_range: Json
          required_skills: string[]
          category: string
          status: string
          created_at: string
          deadline: string | null
          visibility: string
        }
        Insert: {
          id?: string
          client_id: string
          title: string
          description: string
          budget_range: Json
          required_skills?: string[]
          category: string
          status?: string
          created_at?: string
          deadline?: string | null
          visibility?: string
        }
        Update: {
          id?: string
          client_id?: string
          title?: string
          description?: string
          budget_range?: Json
          required_skills?: string[]
          category?: string
          status?: string
          created_at?: string
          deadline?: string | null
          visibility?: string
        }
      }
      proposals: {
        Row: {
          id: string
          project_id: string
          freelancer_id: string
          cover_letter: string | null
          proposed_rate: number
          estimated_duration: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          freelancer_id: string
          cover_letter?: string | null
          proposed_rate: number
          estimated_duration: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          freelancer_id?: string
          cover_letter?: string | null
          proposed_rate?: number
          estimated_duration?: string
          status?: string
          created_at?: string
        }
      }
      contracts: {
        Row: {
          id: string
          project_id: string
          client_id: string
          freelancer_id: string
          start_date: string
          end_date: string | null
          payment_terms: Json
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          client_id: string
          freelancer_id: string
          start_date: string
          end_date?: string | null
          payment_terms: Json
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          client_id?: string
          freelancer_id?: string
          start_date?: string
          end_date?: string | null
          payment_terms?: Json
          status?: string
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          contract_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          contract_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          contract_id?: string
          reviewer_id?: string
          reviewee_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string
          content: string
          created_at: string
          read_at: string | null
          project_id: string | null
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id: string
          content: string
          created_at?: string
          read_at?: string | null
          project_id?: string | null
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string
          content?: string
          created_at?: string
          read_at?: string | null
          project_id?: string | null
        }
      }
      payments: {
        Row: {
          id: string
          contract_id: string
          amount: number
          status: string
          payment_method: string
          created_at: string
          processed_at: string | null
        }
        Insert: {
          id?: string
          contract_id: string
          amount: number
          status?: string
          payment_method: string
          created_at?: string
          processed_at?: string | null
        }
        Update: {
          id?: string
          contract_id?: string
          amount?: number
          status?: string
          payment_method?: string
          created_at?: string
          processed_at?: string | null
        }
      }
      skills_categories: {
        Row: {
          id: string
          name: string
          parent_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          parent_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          parent_id?: string | null
          created_at?: string
        }
      }
      saved_items: {
        Row: {
          id: string
          user_id: string
          item_type: string
          item_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          item_type: string
          item_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          item_type?: string
          item_id?: string
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: string
          content: Json
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          content: Json
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          content?: Json
          read?: boolean
          created_at?: string
        }
      }
      time_entries: {
        Row: {
          id: string
          contract_id: string
          freelancer_id: string
          description: string | null
          duration: string
          started_at: string
          ended_at: string
          created_at: string
        }
        Insert: {
          id?: string
          contract_id: string
          freelancer_id: string
          description?: string | null
          duration: string
          started_at: string
          ended_at: string
          created_at?: string
        }
        Update: {
          id?: string
          contract_id?: string
          freelancer_id?: string
          description?: string | null
          duration?: string
          started_at?: string
          ended_at?: string
          created_at?: string
        }
      }
      milestones: {
        Row: {
          id: string
          contract_id: string
          title: string
          description: string | null
          due_date: string | null
          amount: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          contract_id: string
          title: string
          description?: string | null
          due_date?: string | null
          amount: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          contract_id?: string
          title?: string
          description?: string | null
          due_date?: string | null
          amount?: number
          status?: string
          created_at?: string
        }
      }
    }
  }
}