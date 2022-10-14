import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";

export default function Produtos() {
  return (
    <>
      <Header image="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg">
        Produtos
      </Header>

      {/* Card */}

      <div className="container d-flex my-5">
        <Card title="Harry Potter" descricao="" precoOld="" precoNew="" />
        <Card
          title="Prisioneiro de Askaban"
          descricao=""
          precoOld=""
          precoNew=""
        />
      </div>
    </>
  );
}
