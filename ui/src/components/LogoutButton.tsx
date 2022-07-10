import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "primereact/button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button label="Logout" onClick={() => logout({ returnTo: window.location.origin })} className="p-button-danger p-button-rounded" />
  );
};

export default LogoutButton;