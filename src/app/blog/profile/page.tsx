import { authService } from "@/service/auth/authService";

export default async function ProfilePage() {
  const principal = await authService.getPrincipal();

  return <div>Content</div>;
}
