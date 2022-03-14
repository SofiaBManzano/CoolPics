import Number from "./Number";
const Image = (props) => {
  return (
    <div className="list__img wrapper">
      <div
        style={{ backgroundImage: `url('${props.eachImage.download_url}')` }}
        className="list__img item"
      >
        <Number index={props.index} />
        {/* <img
      className="list__container--img"
      src={props.eachImage.download_url}
     alt={`Author: ${props.eachImage.author}`}
     /> */}
      </div>
    </div>
  );
};
export default Image;
