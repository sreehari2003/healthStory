import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth,ThemeSupa } from '@supabase/auth-ui-react'



const supabase = createClient(
    'https://cjkluqbvfedhpbreebsl.supabase.co/',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2x1cWJ2ZmVkaHBicmVlYnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3MjQyMDAsImV4cCI6MTk4MjMwMDIwMH0.GHgODt7nlJ5KNILxqJMmeQgFpyppvjUL1S3UinAGJSo'

  )
const Login = () => <Auth supabaseClient={supabase} 

  appearance={{ 
    theme: ThemeSupa ,
    
}}
  
  
/>

export default Login