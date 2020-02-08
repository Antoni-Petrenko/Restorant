import React from "react";
import { useRouteMatch } from "react-router-dom";

const MenuItem = ({ title }) => {
  const { url } = useRouteMatch();

  let big = url.includes("glutenfree") ? 7 : 5;

  const drinkPrice = item => <span>{item.price} zł</span>;
  const pizzaPrice = item => (
    <>
      <span>{`${item.price} zł `}</span>
      <span>{` ${item.price + big} zł`}</span>
    </>
  );

  const pizzaSize = () =>
    url.includes("pizza") && <span className="menu__size">26 cm / 38 cm</span>;
  const renderListOfProduct = (title, key) => {
    return title[key]
      .filter(elem => elem.enable)
      .map((item, index) => (
        <li className="menu__item" key={item + index}>
          <div className="menu__item--content">
            <h3>{item.name}</h3>
            <p>{item.ing}</p>
          </div>
          <div className="menu__item--price">
            {url.includes("pizza") ? pizzaPrice(item) : drinkPrice(item)}
          </div>
        </li>
      ));
  };
  const menuTitlesList = Object.keys(title);

  return (
    <>
      {menuTitlesList.map(key => (
        <li key={key}>
          <h2 className="menu__title">{key}</h2>
          {pizzaSize()}
          <ol>{renderListOfProduct(title, key)}</ol>
        </li>
      ))}
    </>
  );
};

export { MenuItem };
