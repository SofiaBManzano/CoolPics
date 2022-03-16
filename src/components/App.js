import "../styles/App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import callToApi from "../services/api";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  //states
  const [imageElement, setImageElement] = useState([]);
  const [headerSize, setHeaderSize] = useState("");
  const [textSize, setTextSize] = useState("");
  const [textSizeStop, setTextSizeStop] = useState("noAnimation");
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
      if (currentScrollY < 150) {
        setHeaderSize("");
        setTextSize("text");
        setTextSizeStop("");
      } else {
        setTextSizeStop("");
        setHeaderSize("small");
        setTextSize("text smallText");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // }, [goingUp]);
  }, [headerSize]);
  return (
    <>
      <Header
        textSizeStop={textSizeStop}
        textSize={textSize}
        headerSize={headerSize}
      />
      <Main isLoading={isLoading} imageElement={imageElement} />
    </>
  );
}

export default App;
