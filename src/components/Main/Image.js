import Number from "./Number";
import Author from "./Author";
const Image = (props) => {
  return (
    <article className="list__img wrapper">
      <div
        style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
        className="list__img item"
      ></div>
      <Number index={props.index} />
      <Author eachImage={props.eachImage} />
    </article>
  );
};
export default Image;
