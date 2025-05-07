import { Outlet } from "react-router";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

export function Layout() {

  return (
    <div className="container py-2 px-6 flex flex-col justify-between min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}