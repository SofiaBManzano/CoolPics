# Revel prueba técnica

:female_detective: **LOS RETOS**

A la hora de comenzar el ejercicio técnico me planteé que tipo de posibilidades en cuanto a maquetación tenía.

Eso me llevó a enfrentarme a las siguientes posibilidades.

- Según la versión desktop de Figma, el test está maquetado sobre la medida 1440x1342.
  Hice las media queries pensando en la medida desktop más usada 1200px, por lo que trabajé con esa medidida como mínima y maqueté sobre la medida dada propuesta en el test de 1440px para que todo fuera lo más exacto posible al modelo propuesto.

- Un reto al que me enfrenté fue cómo maquetar la imagen y la pastilla con su numeración superpuesta. Lo primero que me vino a la cabeza fue crear un componente "Image.js" que contenía la etiqueta `<img>` y un componente "Number.js" que contuviera un `<span>` con un párrafo que contenía la numeración. Todo esto dentro de un `<li>` que formaría una lista con esos dos componentes que luego acomodaría con z-index para superponer el `<span>` sobre `<img>`.

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

Esta era mi propuesta inicial.
Finalmente me decanté por en vez de `<img>` usar un `<div>` con un background-image, que junto con el posicionamiento pudé colocar la pastilla de manera más precisa que con z-index.

- El reto más complicado al que me he afrontado en el test fue el extra del hover en desktop.
  Tenía claro que quería usar el autor de cada la fotografía y hacer un pequeño zoom a la imagen. Investigué mucho por internet y admito no lograr el efecto que buscaba, pero estoy contenta con el resultado ya que no se aleja mucho de lo que buscaba.

**WEB USER FRIENDLY**

- Hice que la página fuera lo más user friendly posible, por lo que añadí un componente Loading que se mostraría hasta que la API devolviese los resultados.
- Al principio tardaba mucho, eso era porque las medidas de las imágenes que me devolvía la API en forma de lista eran muy superiores a las que iba a necesitar en la maquetación.
  Para hacer más corta la espera de la llegada cambié esas medidas mediante:

  ```
  download_url: response.download_url.split("/").slice(0, -2).join("/") + "/800/1200"

  ```

- Me he tomado la libertad de incluir una mediaquery de Tablet muy sencillo, con un grid de dos columnas ya que con una sola columna central no vestía igual, con tres columnas había demasiada información visual en poco espacio por lo que pensé que lo mejor era dejarlo en dos.
  **Apreciaciones a parte**

- Puse un limite de dos dígitos en la pastilla para que, aunque en la prueba solo pedían 9 fotos, si en algún momento necesitáramos 15 resultados, la numeración siguiera el mismo estilo de numeración de dos dígitos y no tres a partir de #10.
  :x: #010
  :heavy_check_mark: #10
