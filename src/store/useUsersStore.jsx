import { create } from 'zustand'
import { supabase } from '../supabase/supabase.config'
import { InsertUsers } from '../supabase/usersCrud'

export const useUsersStore = create((set, get) => ({
  newUserAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.email,
      password: p.password,
    })
    console.log('user auth',data)
    if (error) return null
    const userData = await InsertUsers({
      idauth: data.user.id,
      register_date: new Date(),
      role: 'admin'
    })
    return userData
    },
}))
