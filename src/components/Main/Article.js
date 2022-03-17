import Number from "./Number";
import Image from "./Image";

const Article = (props) => {
  return (
    <article className="article wrapper">
      <Image eachImage={props.eachImage} />
      <Number index={props.index} />
    </article>
  );
};
export default Article;
