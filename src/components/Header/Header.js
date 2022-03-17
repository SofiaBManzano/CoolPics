import Title from "./Title";

const Header = (props) => {
  return (
    <header className={`header ${props.headerSize}`}>
      <Title textSize={props.textSize} />
    </header>
  );
};
export default Header;
