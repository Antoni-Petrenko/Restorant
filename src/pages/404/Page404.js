import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';
const Page404 = () => {
  console.log('ok')
  return (
    <main className="page404">
      <h1>404</h1>
      <p>strona nie dostępna</p>
      <Link className="menu__button--back" to="/">Wróć na głuwną stronę</Link>
    </main>
  );
};

export default Page404;
