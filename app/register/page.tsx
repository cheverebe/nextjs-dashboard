import { NewspaperIcon } from '@/lib/icons';
import Link from 'next/link';
import RegisterForm from '../ui/auth/register-form';
import AuthBranding from '../ui/auth/branding';

export default function RegisterPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
    <div className="bg-background flex items-center justify-center p-6 lg:p-10">
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
