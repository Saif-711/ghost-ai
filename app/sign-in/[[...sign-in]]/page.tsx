import { Suspense } from "react";
import { SignIn } from "@clerk/nextjs";

import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignInPage() {
  return (
    <Suspense>
      <AuthLayout>
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"}
          forceRedirectUrl="/editor"
        />
      </AuthLayout>
    </Suspense>
  );
}
