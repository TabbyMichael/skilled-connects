-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Update profiles table with additional fields
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS role text DEFAULT 'freelancer',
ADD COLUMN IF NOT EXISTS languages text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS portfolio_links text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS education jsonb[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS certifications jsonb[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS expertise text[] DEFAULT '{}';

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id uuid REFERENCES profiles(id),
  title text NOT NULL,
  description text NOT NULL,
  budget_range jsonb NOT NULL,
  required_skills text[] DEFAULT '{}',
  category text NOT NULL,
  status text NOT NULL DEFAULT 'open',
  created_at timestamp with time zone DEFAULT now(),
  deadline timestamp with time zone,
  visibility text NOT NULL DEFAULT 'public',
  CONSTRAINT valid_status CHECK (status IN ('open', 'in_progress', 'completed', 'cancelled')),
  CONSTRAINT valid_visibility CHECK (visibility IN ('public', 'private', 'invite_only'))
);

-- Create proposals table
CREATE TABLE IF NOT EXISTS proposals (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  freelancer_id uuid REFERENCES profiles(id),
  cover_letter text,
  proposed_rate numeric NOT NULL,
  estimated_duration text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'accepted', 'rejected'))
);

-- Create contracts table
CREATE TABLE IF NOT EXISTS contracts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id uuid REFERENCES projects(id),
  client_id uuid REFERENCES profiles(id),
  freelancer_id uuid REFERENCES profiles(id),
  start_date timestamp with time zone NOT NULL,
  end_date timestamp with time zone,
  payment_terms jsonb NOT NULL,
  status text NOT NULL DEFAULT 'active',
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('active', 'completed', 'terminated'))
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  contract_id uuid REFERENCES contracts(id),
  reviewer_id uuid REFERENCES profiles(id),
  reviewee_id uuid REFERENCES profiles(id),
  rating integer NOT NULL,
  comment text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_rating CHECK (rating >= 1 AND rating <= 5)
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id uuid REFERENCES profiles(id),
  receiver_id uuid REFERENCES profiles(id),
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  read_at timestamp with time zone,
  project_id uuid REFERENCES projects(id)
);

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  contract_id uuid REFERENCES contracts(id),
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  payment_method text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  processed_at timestamp with time zone,
  CONSTRAINT valid_status CHECK (status IN ('pending', 'completed', 'failed'))
);

-- Create skills_categories table
CREATE TABLE IF NOT EXISTS skills_categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL UNIQUE,
  parent_id uuid REFERENCES skills_categories(id),
  created_at timestamp with time zone DEFAULT now()
);

-- Create saved_items table for favorites/bookmarks
CREATE TABLE IF NOT EXISTS saved_items (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id),
  item_type text NOT NULL,
  item_id uuid NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_item_type CHECK (item_type IN ('project', 'profile', 'job'))
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES profiles(id),
  type text NOT NULL,
  content jsonb NOT NULL,
  read boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Create time_entries table
CREATE TABLE IF NOT EXISTS time_entries (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  contract_id uuid REFERENCES contracts(id),
  freelancer_id uuid REFERENCES profiles(id),
  description text,
  duration interval NOT NULL,
  started_at timestamp with time zone NOT NULL,
  ended_at timestamp with time zone NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Create milestones table
CREATE TABLE IF NOT EXISTS milestones (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  contract_id uuid REFERENCES contracts(id),
  title text NOT NULL,
  description text,
  due_date timestamp with time zone,
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'completed', 'cancelled'))
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON projects(client_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_proposals_project_id ON proposals(project_id);
CREATE INDEX IF NOT EXISTS idx_proposals_freelancer_id ON proposals(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_contracts_project_id ON contracts(project_id);
CREATE INDEX IF NOT EXISTS idx_contracts_client_id ON contracts(client_id);
CREATE INDEX IF NOT EXISTS idx_contracts_freelancer_id ON contracts(freelancer_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender_receiver ON messages(sender_id, receiver_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_items_user_id ON saved_items(user_id);