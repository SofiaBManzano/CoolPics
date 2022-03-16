import { BsCardImage } from "react-icons/bs";
const Author = (props) => {
  return (
    <div class="overlay">
      <span className="author-name__icon">
        <i class="fa fa-solid fa-image"></i>{" "}
      </span>
      <p className="author-name__author">{props.eachImage.author}</p>
    </div>
  );
};
export default Author;
