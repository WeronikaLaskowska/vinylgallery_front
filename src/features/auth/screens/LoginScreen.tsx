import Image from "next/image";
import { LoginForm } from "../components/LoginForm";

export const LoginScreen = () => {
  return (
    <div className="flex flex-row w-full justify-center items-center gap-10">
      <div
        className="h-10/12 m-auto flex hidden w-1/2 items-center justify-center md:flex "
        style={{
          background: "#fff",
          borderRadius: "20px",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          height: "90vh",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1602848596718-45693ff58c78?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login"
          width={600}
          height={600}
        />
      </div>
      <div className="m-auto h-screen w-full items-center justify-center md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};
