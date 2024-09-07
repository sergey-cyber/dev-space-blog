import { authService } from "@/service/auth/authService";
import { PersonalInfoForm } from "@/ui/features/self-profile";

export default async function PersonalInfoPage() {
  const principal = await authService.getPrincipalStricktly();

  return <PersonalInfoForm principal={principal} />;
}
