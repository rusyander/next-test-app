"use client";
import { Button } from "@/shared/ui/button";
import { Github } from "lucide-react";
import { ClientSafeProvider } from "next-auth/react";
import { useOAuthSignIn } from "../_vm/use-oauth-sign-in";
import { Spinner } from "@/shared/ui/spinner";

export function ProviderButton({ provider }: { provider: ClientSafeProvider }) {
  const oauthSignIn = useOAuthSignIn(provider);

  const getIcon = (provider: ClientSafeProvider) => {
    switch (provider.id) {
      case "github":
        return <Github className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Button
      variant="outline"
      type="button"
      disabled={oauthSignIn.isPending}
      onClick={() => oauthSignIn.signIn()}
    >
      {oauthSignIn.isPending ? (
        <Spinner className="mr-2 h-4 w-4" area-label="Выход" />
      ) : (
        getIcon(provider)
      )}
      {provider.name}
    </Button>
  );
}
