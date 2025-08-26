import {  NavLink } from "react-router";

export const NavBar = () => {
  return (
    <div className="w-full">
    <div className="flex items-center justify-between px-10 py-3 max-w-[750px] mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        
    </div>
    </div>
  )
}
