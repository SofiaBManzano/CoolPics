import Number from "./Number";
import Author from "./Author";
const Image = (props) => {
  return (
    <article className="article wrapper">
      {" "}
      <div
        style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
        className="article__img"
      >
        {" "}
        <Author eachImage={props.eachImage} />
      </div>
      <Number index={props.index} />
    </article>
  );
};
export default Image;
