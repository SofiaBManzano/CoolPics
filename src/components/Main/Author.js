const Author = (props) => {
  return (
    <div className="author-name">
      <p className="author-name__author">
        {" "}
        <span className="author-name__icon fa fa-solid fa-image"> </span>
        {props.eachImage.author}{" "}
      </p>
    </div>
  );
};
export default Author;
