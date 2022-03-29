import "../styles/App.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import callToApi from "../services/api";
import ErrorBoundary from "./Error/ErrorBoundary";
import Error from "./Error/Error";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  //states
  const [imageElement, setImageElement] = useState([]);
  const [headerSize, setHeaderSize] = useState("");
  const [textSize, setTextSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  //call to API
  useEffect(() => {
    callToApi()
      .then((apiData) => {
        setImageElement(apiData);
        setIsLoading(true);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  //useEffect scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 90) {
        setHeaderSize("");
        setTextSize("");
      } else {
        setHeaderSize("small");
        setTextSize("Small");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerSize]);
  return (
    <>
      <ErrorBoundary>
        <Header textSize={textSize} headerSize={headerSize} />
        {hasError ? (
          <Error />
        ) : (
          <Main isLoading={isLoading} imageElement={imageElement} />
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
