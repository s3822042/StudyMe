import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Discord from 'next-auth/providers/discord'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Facebook, Discord]
})
