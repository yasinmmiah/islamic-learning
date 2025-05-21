/*
  # Create initial admin user

  1. Changes
    - Insert initial admin user into admins table
    - Set up RLS policy for admin creation
  
  2. Security
    - Only authenticated users with admin role can create other admins
*/

-- Insert the initial admin user
INSERT INTO public.admins (email, role)
VALUES ('admin@example.com', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Create policy to allow admins to create other admins
CREATE POLICY "Admins can create other admins"
ON public.admins
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.admins
    WHERE admins.id = auth.uid()
    AND admins.role = 'admin'
  )
);