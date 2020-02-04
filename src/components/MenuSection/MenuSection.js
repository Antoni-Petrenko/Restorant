import React from "react";
import MonogramAnd from "../Monogram";
import MenuCard from "../Card";
import polska from "../../img/PizzaIcon/polska.png";
import spinachi from "../../img/PizzaIcon/spinachi.png";
import zielonomi from "../../img/PizzaIcon/zielonomi.png";

const MenuSection = () => {
  return (
    <section id="menu" className="Menu-section">
      <h2 className="Menu-section__heading">MENU</h2>
      <MonogramAnd />
      <div className="Menu-section__cards-area-3d">
        <MenuCard
          src={polska}
          altName="pizza polska"
          title="Menu Klasyczne"
          links={{
            gfree: "/menu/glutenfree/classic",
            classic: "/menu/regular/classic"
          }}
        />
        <MenuCard
          src={spinachi}
          altName="pizza spinachi"
          title="Menu Wegańskie"
          links={{
            gfree: "/menu/glutenfree/vegan",
            classic: "/menu/regular/vegan"
          }}
        />
        <MenuCard
          src={zielonomi}
          altName="pizza zielonomi"
          title="Menu Wegetariańskie"
          links={{
            gfree: "/menu/glutenfree/vegetarian",
            classic: "/menu/regular/vegetarian"
          }}
        />
      </div>
    </section>
  );
};

export { MenuSection };
