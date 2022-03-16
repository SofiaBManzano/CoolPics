import Title from "./Title";

const Header = (props) => {
  return (
    <header className={`header ${props.headerSize}`}>
      <Title textSize={props.textSize} textSizeStop={props.textSizeStop} />
    </header>
  );
};
export default Header;
