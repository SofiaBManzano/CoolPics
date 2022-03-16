const Number = (props) => {
  return (
    <span className="container">
      <p className="container__number">
        #
        {props.index.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>
    </span>
  );
};
export default Number;
