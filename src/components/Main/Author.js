import { BsCardImage } from "react-icons/bs";
const Author = (props) => {
  return (
    <div class="overlay">
      <p className="author-name">
        <span className="author-name__name">
          <BsCardImage className="author-name__name--icon" />
          {props.eachImage.author}
        </span>
      </p>
    </div>
  );
};
export default Author;
