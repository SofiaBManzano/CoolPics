import Title from "./Title";

const Header = (props) => {
  return (
    <header className={`header ${props.headerSize}`}>
      <Title headerSize={props.headerSize} />
    </header>
  );
};
export default Header;
