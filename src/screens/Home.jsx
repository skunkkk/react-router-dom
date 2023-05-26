import React from "react";
import { Link } from "react-router-dom";
import HomeLink from "../componentes/HomeLink/HomeLink";

export default function Home() {
  return (
    <div>
      <HomeLink to={"/sobre"}> Clique aqui </HomeLink> para ir ao sobre nós
    </div>
  );
}
