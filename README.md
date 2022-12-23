# Frontend challenge

:woman_juggling: **The challenges** :woman_juggling:

At the time of starting the technical exercise I thought about what kind of possibilities I had in terms of layout, and that led me to face the following challenges.

- According to the desktop version of Figma, the test is laid out on the 1440x1342 size. I made the media queries thinking about the most used desktop size 1200px, so I worked with that size as a minimum and I modeled on the given size proposed in the 1440px test so that everything was as exact as possible to the proposed model. The mobile version in figma is made for the size of iPhone 6/7/8 Plus, so I developed the mobile version in that measurement.

- The hardest challenge I faced in the test was the desktop hover extra development. It was clear to me that I wanted to display the author of each photograph and zoom in a little on the image. I did a lot of research on the internet and, while I admit I didn't achieve the effect I was looking for, I'm happy with the result, since it's not far from what I was looking for.

- One challenge I faced was how to layout the image and the tablet with the numbering superimposed. The first thing that came to mind was to create an "Image.js" component containing the `<img>` tag and a "Number.js" component containing a `<span>` with a paragraph containing the numbering. All of this inside a `<li>` that would form a list with those two components that I would then z-index to overlay the `<span>` over the `<img>`.

**Li Component**

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

**Image Component**

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

**Number Component**

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

This was my initial proposal. Finally I decided to use a `<div>` with a background-image instead of `<img>`, which together with the positioning managed to place the pill more precisely than with z-index.

- Finally, another mini challenge was to face Error handling, something I had never done before but with the help of the React documentation I was able to implement it.

:eyes: **User friendly** :eyes:

- I added a Loading component that would be displayed until the API returned the results.
- At first the image downloads took a bit of time, that was because the measurements of the images that the API returned to me in the form of a list were much higher than those that I was going to need in the layout.
  To make the latency shorter I changed those measures by:

  ```
   download_url: response.download_url.split("/").slice(0, -2).join("/") + "/800/1200"
  ```

- I have taken the liberty of including a very simple mediaquery for tablets with a grid of only two columns, since with a single central column there was a lot of air left on the sides and with three columns there was too much visual information in little space.

:alien: **Bonus Track** :alien:

- I put a limit of two digits in the numerical tablet so that, although in the test they only asked for 9 photos, if at some point we needed 15 results, the numbering would follow the same numerical pattern of two digits and not three.  
  :x: #010  
  :heavy_check_mark: #10
