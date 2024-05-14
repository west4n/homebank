import Image from "next/image";
import { Loader2 } from "lucide-react";

import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold text-[#2E2A47]">С возвращением!</h1>
          <p className="text-base text-[#7E8CA0]">
            Войдите или создайте аккаунт, чтобы получить доступ к своей панели.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>

          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="hidden h-full items-center justify-center bg-blue-600 lg:flex">
        <Image src="/logo.svg" width={400} height={106} alt="logo" />
      </div>
    </div>
  );
}
