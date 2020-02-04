import React from "react";

const FrontSide = ({ src, altName, title }) => {
  return (
    <div className="Card__side Card__side--front">
      <figure>
        <div className="Card__side--front-img">
          <img src={src} alt={altName} />
        </div>
        <figcaption className="Card__side--front-title">{title}</figcaption>
        <ul className="Card__side--front-list">
          <li>Wersja bezglutenowa</li>
          <li>Ciękie ciasto z dodatkiem piwa</li>
          <li>Dostawa</li>
          <li>23 rodzaje</li>
        </ul>
      </figure>
    </div>
  );
};

export { FrontSide };
