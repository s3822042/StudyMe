import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { auth, signIn } from '@/lib/auth'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account'
}

export default async function SignInPage() {
  const isSignedIn = await auth()
  if (isSignedIn) redirect('/')

  return (
    <section className="container max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in to StudyMe</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex gap-4">
            <Button
              variant={'outline'}
              formAction={async () => {
                'use server'
                await signIn('google')
              }}
            >
              <Icons.google className="mr-2 h-5 w-5" />
              Google
            </Button>
            <Button
              variant={'outline'}
              formAction={async () => {
                'use server'
                await signIn('facebook')
              }}
            >
              <Icons.google className="mr-2 h-5 w-5" />
              Facebook
            </Button>
            <Button
              variant={'outline'}
              formAction={async () => {
                'use server'
                await signIn('discord')
              }}
            >
              <Icons.discord className="mr-2 h-5 w-5" />
              Discord
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
