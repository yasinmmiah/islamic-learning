/*
  # Create initial admin user

  1. Changes
    - Insert initial admin user into the admins table
    - Email: ymmiah96@gmail.com
    
  2. Security
    - Uses Supabase's built-in auth.users() function to get user data
    - Maintains RLS policies
*/

-- First create the user in auth.users (this is handled by Supabase when signing up)
SELECT auth.sign_up(
  'ymmiah96@gmail.com',
  'Admin123!'
);

-- Then insert the admin record
INSERT INTO admins (email, role)
VALUES ('ymmiah96@gmail.com', 'admin')
ON CONFLICT (email) DO NOTHING;