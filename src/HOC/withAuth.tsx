import { ComponentType, ReactElement, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AUTH_COOKIE } from "@/constants";

const isAuthenticated = (AuthWrapperComponent: ComponentType<any>) => {
  const AuthComponent = (props: any): ReactElement => {
    const router = useRouter();

    useEffect(() => {
      //check if token is present
      if (!AUTH_COOKIE) {
        router.replace("/auth/signin");
      }
    }, [AUTH_COOKIE]);

    return <AuthWrapperComponent {...props} />;
  };

  return AuthComponent;
};
export default isAuthenticated;
