import Article from "./Article";
const Li = (props) => {
  return (
    <li className="list-tag">
      <Article index={props.index} eachImage={props.eachImage} />
    </li>
  );
};
export default Li;
