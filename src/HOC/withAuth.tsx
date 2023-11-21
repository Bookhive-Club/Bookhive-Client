import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getCookie } from "cookies-next";

const isAuthenticated = (WrapperFunction: React.ComponentType) => {
  const AuthWrapper = (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const hasToken = getCookie("_auth_token", {
        maxAge: 30 * 60 * 24,
      });
      if (!hasToken) {
        router.replace("/auth/signin");
      }
    }, []);

    return <WrapperFunction {...props} />;
  };

  return AuthWrapper;
};

export default isAuthenticated;
