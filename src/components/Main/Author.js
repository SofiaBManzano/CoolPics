const Author = (props) => {
  return (
    <div class="overlay">
      <p className="author-name">
        <span>Author: {props.eachImage.author}</span>
      </p>
    </div>
  );
};
export default Author;
