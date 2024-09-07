import { signinRoute } from "@/routes/auth/signin-route";
import { authService } from "@/service/auth/authService";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/ui/shared/shadcn/ui/avatar";
import { ProfileNavigation } from "@/ui/widgets/profile";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dev space profile",
  description: "Information about a user profile",
};

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const principal = await authService.getPrincipal();

  if (!principal) {
    // not authorized
    return redirect(signinRoute.getPath());
  }

  return (
    <section>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 flex flex-col items-center gap-y-4">
          <Avatar className="size-60">
            <AvatarImage src={principal.image || undefined} alt="avatar" />
            <AvatarFallback>
              {principal.name?.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="text-center">{principal.name}</p>
          <ProfileNavigation />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
