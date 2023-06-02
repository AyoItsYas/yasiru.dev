function Header(props: ComponentProps) {
  const { _id, children } = props;

  return <header id={_id}>{children}</header>;
}

export default Header;
export { Header };
