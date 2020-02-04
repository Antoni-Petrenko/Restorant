import React from "react";
import { Card } from "./Card";
import { FrontSide } from "./FrontSide";
import { BackSide } from "./BackSide";
import "./styles.scss";

const MenuCard = ({ src, altName, title, links }) => (
  <Card>
    <BackSide {...links} />
    <FrontSide title={title} src={src} altName={altName}  />
  </Card>
);

export default MenuCard;
