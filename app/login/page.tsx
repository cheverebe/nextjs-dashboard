import { ArrowLeftIcon, NewspaperIcon } from '@/lib/icons';
import Link from 'next/link';
import LoginForm from '../ui/auth/login-form';
import AuthBranding from '../ui/auth/branding';

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="bg-primary flex items-center justify-center p-6 lg:p-10">
        <Link
          href="/"
          className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 focus-visible:ring-primary-foreground absolute left-4 top-4 flex items-center space-x-2 rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-1"
          prefetch={false}
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back</span>
        </Link>
        <AuthBranding />
      </div>
      <div className="bg-background flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-full max-w-[400px] space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Welcome back!</h2>
            <p className="text-muted-foreground">
              Sign in to your account to continue.
            </p>
          </div>

          <LoginForm />

          <p className="text-muted-foreground text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="font-medium underline underline-offset-4"
              prefetch={false}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
