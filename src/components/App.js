import "../styles/App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import callToApi from "../services/api";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
function App() {
  //states
  const [imageElement, setImageElement] = useState([]);
  const [headerSize, setHeaderSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    callToApi().then((apiData) => {
      setImageElement(apiData);
      setIsLoading(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY < 150 ? setHeaderSize("") : setHeaderSize("small");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // }, [goingUp]);
  }, [headerSize]);
  return (
    <div>
      <Header headerSize={headerSize} />
      <Main isLoading={isLoading} imageElement={imageElement} />
    </div>
  );
}

export default App;
