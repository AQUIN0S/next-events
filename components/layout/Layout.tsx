import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
