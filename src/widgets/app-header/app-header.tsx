import { LogoIcon } from "@/shared/ui/logo-icon";
import { Layout } from "./_ui/layout";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";
import { ToggleTheme } from "@/features/theme/toggle-theme";

export function AppHeader() {
  return (
    <Layout
      logo={<LogoIcon />}
      nav={<MainNav />}
      profile={<Profile />}
      actions={<ToggleTheme />}
    />
  );
}
