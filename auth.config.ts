import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard =
        nextUrl.pathname.startsWith('/dashboard') ||
        nextUrl.pathname.startsWith('/newsletters');

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      }

      if (isLoggedIn) {
        return Response.redirect(new URL('/newsletters', nextUrl));
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = typeof token.id === 'string' ? token.id : '';
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
