import Loading from "../Loading";
import Li from "./Li";

const Main = (props) => {
  const eachImage = props.imageElement.map((eachImage, index) => (
    <Li
      imageElement={props.imageElement}
      eachImage={eachImage}
      index={index + 1}
      key={eachImage.id}
    />
  ));
  const renderList = () => {
    return props.isLoading ? (
      <ul className="main__ul">{eachImage}</ul>
    ) : (
      <Loading />
    );
  };
  return <main className="main">{renderList()}</main>;
};
export default Main;
