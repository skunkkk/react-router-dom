import React from "react";
import { Link } from "react-router-dom";
import HomeLink from "../componentes/HomeLink/HomeLink";

export default function Sobre() {
  return (
    <div>
      <HomeLink to={"/"}>Clique aqui</HomeLink>para voltar
    </div>
  );
}
