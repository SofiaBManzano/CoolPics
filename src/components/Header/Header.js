import Title from "./Title";

const Header = (props) => {
  return (
    <header className="header">
      <Title headerSize={props.headerSize} />
    </header>
  );
};
export default Header;
