import { AppHeader } from "@/widgets/app-header/app-header";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppHeader variant="auth" />

      {children}
    </>
  );
}
