# Revel prueba técnica

**MAQUETACIÓN**
A la hora de comenzar el ejercicio técnico me planteé que tipo de posibilidades en cuanto a maquetación tenía.
Di unos pasos que me llevaron a cambiar otros.
En cuanto a maquetación me he enfrentado a las siguientes posibilidades.
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

Esta era mi propuesta inicial. Finalmente me decanté por en vez de `<img>` usar un `<div>` con un background-image, que junto con el posicionamiento de manera más precisa que con z-index.

- Según la versión desktop de Figma, está maquetado sobre la medida 1440x1342.
  Hice las media queries pensando en la medida desktop más usada (1200px), por lo que trabajé con esa mediaquery como mínima y maqueté sobre la medida dada (1440ps) para que todo fuera lo más exacto posible al modelo dado.

**SOBRE LA API**

- Intenté que la página fuera lo más user friendly posible, por lo que añadí un componente Loading que se mostraría hasta que la API devolviese los resultados.
- Al principio tardaba mucho, eso era porque las medidas de las imágenes que me devolvía la API en forma de lista (porque mi plan era devolver también el nombre del autor de las imágenes) eran muy superiores a las que iba a necesitar en la maquetación.
  Para hacer más corta la espera cambié esas medidas mediante:
  `download_url: response.download_url.split("/").slice(0, -2).join("/") + "/800/1200"`

**Apreciaciones a parte**

- Puse un limite de dos dígitos en la pastilla para que, aunque en la maquetación solo pedían 9 fotos, si en algún momento necesitáramos 15 resultados, la numeración siguiera el mismo estilo de numeración de dos dígitos y tres a partir de #10.

- Me he tomado la libertad de incluir una mediaquery de Tablet muy sencillo, con un grid de dos columnas ya que con una sola columna central no vestía igual, con tres columnas había demasiada información visual en poco espacio por lo que pensé que lo mejor era dejarlo en dos.
