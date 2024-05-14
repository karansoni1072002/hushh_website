import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
        router.push("/developer-api/content"); 
    });
  };

  return (
    <div>
      {session ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button
          onClick={() =>
            signIn(
              "goolge",
              { callbackUrl: "/developer-api/on-boarding" },
              console.log("Github session data :", session)
            )
          }
        >
          LogIn
        </Button>
      )}
    </div>
  );
};

export default LogoutButton;
