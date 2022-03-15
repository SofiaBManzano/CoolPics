import Number from "./Number";
const Image = (props) => {
  return (
    <article className="list__img wrapper">
      <div
        style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
        className="list__img item"
      >
        <Number index={props.index} />
      </div>
    </article>
  );
};
export default Image;
