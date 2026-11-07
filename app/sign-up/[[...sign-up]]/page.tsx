import { Suspense } from "react";
import { SignUp } from "@clerk/nextjs";

import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return (
    <Suspense>
      <AuthLayout>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"}
          forceRedirectUrl="/editor"
        />
      </AuthLayout>
    </Suspense>
  );
}
