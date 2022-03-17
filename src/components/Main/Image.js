import Author from "./Author";
const Image = (props) => {
  return (
    <div
      style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
      className="article__img"
    >
      {" "}
      <Author eachImage={props.eachImage} />
    </div>
  );
};
export default Image;
