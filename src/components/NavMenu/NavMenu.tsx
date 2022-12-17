import "../NavMenu/NavMenu.scss";
export const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Diets</a>
        </li>
        <li>
          <a href="#">Calorie calculator</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};
