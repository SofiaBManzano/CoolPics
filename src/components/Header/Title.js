const Title = (props) => {
  const title = "random pics";

  return <h1 className={`text${props.textSize}`}>{title}</h1>;
};
export default Title;
