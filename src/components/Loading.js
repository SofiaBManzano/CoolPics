const Loading = () => {
  return (
    <div className="loading">
      <p className="loading__text">Loading...</p>
      <img
        className="loading__gif"
        src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif"
        id="loader"
        alt="loading"
      />
      <span className="loading__circle"></span>
    </div>
  );
};

export default Loading;
