import React from 'react'
import { Auth,ThemeSupa } from '@supabase/auth-ui-react'




const Login = () => <Auth supabaseClient={supabase} 

  appearance={{ 
    theme: ThemeSupa ,
    
}}
  
  
/>

export default Login