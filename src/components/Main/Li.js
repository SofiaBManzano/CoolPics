import Number from "./Number";
import Image from "./Image";
const Li = (props) => {
  return (
    <li className="list__container">
      {/* <Number index={props.index} /> */}
      <Image eachImage={props.eachImage} />
    </li>
  );
};
export default Li;
