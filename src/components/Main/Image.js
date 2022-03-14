import Number from "./Number";
const Image = (props) => {
  return (
    <div
      style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
      className="list__img"
    >
      <Number index={props.index} />
      {/* <img
      className="list__container--img"
      src={props.eachImage.download_url}
     alt={`Author: ${props.eachImage.author}`}
     /> */}
    </div>
  );
};
export default Image;
