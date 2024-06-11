import { create } from 'zustand'
import { supabase } from '../supabase/supabase.config'
export const useAuthStore = create((set, get) => ({
    signInWithEmail: async (p) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.email,
            password: p.password,
        })
        if (error) {
            return null
        }
        console.log('data User',data)
        return data.user
    },
    signOut: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            throw new Error('A ocurrido un error durante el cierre de sesión' + error)
        }
    },
}))
