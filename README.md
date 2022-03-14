# Revel prueba técnica

A la hora de comenzar el ejercicio técnico me planteé que tipo de posibilidades en cuanto a maquetación tenía.
Di unos pasos que me llevaron a cambiar otros. En cuanto a maquetación me he enfrentado a las siguientes posibilidades.
La primera duda que tuve fue cómo maquetar la imagen y la pastilla con su numeración superpuesta. Lo primero que me vino a la cabeza fue crear un componente "Image.js" que contenía la etiqueta `<img>` y un componente "Number.js" que contuviera un `<span>` con un párrafo que contenía la numeración. Todo esto dentro de un `<li>` que formaría una lista con esos dos componentes que luego acomodaría con z-index para superponer el `<span>` sobre `<img>`.

##componente Li

```
const Li = (props) => {
  return (
    <li className="list__container">
      <Number index={props.index} />
      <Image index={props.index} eachImage={props.eachImage} />
    </li>
  );
};
```

##Componente Image

```
const Image = (props) => {
  return (
    <img
      className="list__container--img"
      src={props.eachImage.download_url}
     alt={`Author: ${props.eachImage.author}`}
     />
  );
};
```

## componente Image

```
const Number = (props) => {
  return (
    <span className="list__container--rectangle">
      <p className="list__container--number">
        #
        {props.index.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </p>
    </span>
  );
};
```

Esta era mi propuesta inicial. Finalmente me decanté por en vez de `<img>` usar un `<div>` con un background-image, y ese `<div>` contendría el componente `<Number/>` que ya podría moverlo dentro del `<div>` con ayuda de Flexbox de manera más sencilla que con z-index
