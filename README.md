# Revel prueba técnica

A la hora de comenzar el ejercicio técnico me planteé que tipo de posibilidades en cuanto a maquetación tenía.
Di unos pasos que me llevaron a cambiar otros. En cuanto a maquetación me he enfrentado a las siguientes posibilidades.
La primera duda que tuve fue cómo maquetar la imagen y la pastilla con su numeración superpuesta. Lo primero que me vino a la cabeza fue crear un componente "Image.js" que contenía la etiqueta `<img>` y un componente "Number.js" que contuviera un `<span>` con un párrafo que contenía la numeración. Todo esto dentro de un `<li>` que formaría una lista con esos dos componentes que luego acomodaría con z-index para superponer el `<span>` sobre `<img>`.

**Componente Li**

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

**Componente Image**

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

**componente Number**

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

Según la versión desktop de Figma, está hecha sobre la medida 1440x1342, igualmente la medida desktop más usada es 1200px de ancho por lo que trabajé con esa mediaquery como mínima y maqueté sobre la medida dada 1440 para fijarme en cada margen.

hablar sobre el bem y los componentes individualizados
Limite las medidas de lo que me devolvía la api en forma de lista para que no tardara tanto en cargar

Puse un limite de dos dígitos en la pastilla para que, aunque en la maquetación solo salían 9 fotos, si en algún momento se necesitaran 15 resultados la numeración siguiera el mismo estilo de numeración
Me he tomado la libertad de incluir un responsive tablet muy sencillo con grid y dos columnas porque con una sola columna central no quedaba vistoso, y tres columnas había demasiada información visual en poco espacio por lo que creía que lo mejor era dejarlo en dos.
