/*
  # Create initial admin user
  
  1. Changes
    - Insert initial admin user into admins table
    
  2. Security
    - Uses existing RLS policies from previous migration
*/

-- Insert the admin record
INSERT INTO admins (email, role)
VALUES ('ymmiah96@gmail.com', 'admin')
ON CONFLICT (email) DO NOTHING;