import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Mercado Pago</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia da loja</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed error illo
      magnam, eligendi expedita excepturi, sit nostrum culpa commodi tenetur
      sapiente facilis eveniet pariatur possimus odio fugiat voluptatem aliquid?
      Molestiae, voluptatem voluptas. Sed in animi deleniti doloremque esse
      molestias corporis, maiores expedita harum ut? Minus illum ea maxime
      quibusdam laboriosam?
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptas
      dolore incidunt labore iste, illum quis assumenda explicabo,
      exercitationem architecto quisquam! Ut ex architecto, magni, voluptates
      ratione quidem asperiores maxime nihil dicta aut totam et commodi dolor
      saepe corrupti qui deleniti non praesentium eum? Cumque iure, fugit
      corporis obcaecati minima quia! Cumque nihil quidem cum excepturi
      doloremque tempore nulla recusandae, debitis incidunt odio dignissimos?
      Repudiandae perspiciatis sequi nisi neque obcaecati!
    </p>
  </Description>
);

export default Product;
