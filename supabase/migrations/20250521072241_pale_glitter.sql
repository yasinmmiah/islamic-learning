/*
  # Add initial admin user

  1. Changes
    - Inserts initial admin user into auth.users
    - Adds admin user to admins table
    
  2. Security
    - Uses secure password hashing
    - Sets up proper role and email
*/

-- Create initial admin user in auth.users
-- Email: admin@noorkids.com
-- Password: Admin123!
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  role
)
SELECT 
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'admin@noorkids.com',
  crypt('Admin123!', gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{"name":"Admin"}',
  now(),
  now(),
  'authenticated'
WHERE NOT EXISTS (
  SELECT 1 FROM auth.users WHERE email = 'admin@noorkids.com'
);

-- Add admin to admins table
INSERT INTO admins (
  id,
  email,
  role
)
SELECT 
  id,
  email,
  'admin'
FROM auth.users 
WHERE email = 'admin@noorkids.com'
AND NOT EXISTS (
  SELECT 1 FROM admins WHERE email = 'admin@noorkids.com'
);