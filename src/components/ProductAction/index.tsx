/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  ShippingIcon,
  Actions,
  Button,
  Benefits,
  TrophyIcon,
  ShieldIcon,
  BackIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo | 18 vendidos</Condition>

      <Row>
        <h1>Camiseta Branca da marca X</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">69</span>
          <span className="cents">90</span>
        </PriceRow>

        <InstallmentsInfo>em 5x de R$ 13,98</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <ShippingIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício Mercado Pontos</span>
          <a href="#" className="more">
            Ver mais formas de entrega
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <BackIcon />
          <p>
            <span>Devolução grátis</span>. Você tem 30 dias a partir da data de
            recebimento.
          </p>
        </li>

        <li>
          <ShieldIcon />
          <p>
            <span>Compra Garantida</span>, receba o produto que está esperando
            ou devolvemos o dinheiro.
          </p>
        </li>

        <li>
          <TrophyIcon />

          <p>
            <span>Mercado Pontos</span>. Você acumula 1799 pontos.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
