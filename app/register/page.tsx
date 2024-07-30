import Link from 'next/link';
import RegisterForm from '../ui/auth/register-form';
import AuthBranding from '../ui/auth/branding';
import { ArrowLeftIcon } from '@/lib/icons';

export default function RegisterPage() {
  return (<div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
    <div className="bg-background flex items-center justify-center p-6 lg:p-10">
      <Link
            href="/"
            className="bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary-foreground absolute left-4 top-4 flex items-center space-x-2 rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-1"
            prefetch={false}
          >
        <ArrowLeftIcon className="h-5 w-5" />
        <span>Back</span>
      </Link>
      <div className="mx-auto w-full max-w-[400px] space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Welcome!</h2>
          <p className="text-muted-foreground">
            Please register to continue.
          </p>
        </div>

        <RegisterForm />

        <p className="text-muted-foreground text-center text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Log-in
          </Link>
        </p>
      </div>
    </div>
      <div className="bg-primary flex items-center justify-center p-6 lg:p-10">
        <AuthBranding />
      </div>
    </div>
  );
}
