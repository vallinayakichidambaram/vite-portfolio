import {  NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-3 max-w-[50%] align-right">
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <button>Download Resume</button>
    </div>
  )
}
