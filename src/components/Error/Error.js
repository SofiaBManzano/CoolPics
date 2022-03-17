const Error = () => {
  const message = "¡Hey! Sorry, there was an error loading the images.";
  return (
    <div className="error">
      <span class="fa fa-solid fa-briefcase-medical error__icon"></span>

      <p className="error__text">{message}</p>
    </div>
  );
};

export default Error;
