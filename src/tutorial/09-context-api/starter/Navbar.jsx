import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";
export const context = createContext();
export const useNavContext = () => {
  return useContext(context);
};
const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <context.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </context.Provider>
  );
};
export default Navbar;
