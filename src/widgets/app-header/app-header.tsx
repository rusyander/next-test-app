import React from "react";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";
import { ToggleTheme } from "@/features/theme/toggle-theme";

export default function AppHeader({
  variant,
}: {
  variant: "public" | "auth" | "private";
}) {
  const isProfile = variant !== "auth";
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
