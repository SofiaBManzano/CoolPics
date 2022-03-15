import Image from "./Image";
const Li = (props) => {
  return (
    <li className="list__container">
      {/* <Number index={props.index} /> */}
      <Image index={props.index} eachImage={props.eachImage} />
    </li>
  );
};
export default Li;
