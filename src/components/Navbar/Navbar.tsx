import { Hamburger } from "components/Hamburger/Hamburger";
import { Logo } from "components/Logo/Logo";
import { NavbarItems } from "components/NavbarItems/NavbarItems";
import { NavMenu } from "components/NavMenu/NavMenu";
import "../Navbar/Navbar.scss";
export const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavMenu />
      <NavbarItems />
      <Hamburger />
    </div>
  );
};
