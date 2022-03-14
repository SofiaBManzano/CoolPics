const Header = (props) => {
  return (
    <header className="header">
      <h1 className={`header__title ${props.headerSize}`}>CoolPics</h1>
    </header>
  );
};
export default Header;
