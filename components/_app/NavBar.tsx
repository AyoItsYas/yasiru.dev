import NavBarStyles from '@components/NavBar.module.scss';

function NavBar(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <nav id={_id} className={NavBarStyles.NavBar}>
      {children}
    </nav>
  );
}

function NavBarMenu(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <ul id={_id} className={NavBarStyles.NavBarMenu}>
      {children}
    </ul>
  );
}

NavBar.Menu = NavBarMenu;

function NavBarMenuItem(props: ComponentProps) {
  const { _id, children } = props;

  return (
    <li id={_id} className={NavBarStyles.NavBarMenuItem}>
      {children}
    </li>
  );
}

NavBarMenu.Item = NavBarMenuItem;

export default NavBar;
export { NavBar, NavBarMenuItem, NavBarStyles };
