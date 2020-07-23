import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

import product from "../image/product.png";
import dot from "../image/dot.svg";

const Dot = styled.img`
  width: 10px;
  padding-bottom:5px;
`;
const StyledTitleCard = styled.h6`
  padding-top: 3px;

`;

const StyledHeaderCard = styled(Col)`
  padding-top: 5px;
`;

const StyledContainer = styled.div`
  background-color: white;
  border: 0.5px solid;
  border-color: #c5c5c59c;
  padding: 10px;
`;

const StyledTopProduct = styled(Row)`
  border: 0.5px solid;
  border-color: #c5c5c59c;
  border-radius: 4px;
  margin: 1px;
  background-color: #ffe7bd;
`;

const StyledProduct = styled(Row)`
  border: 0.5px solid;
  border-color: #c5c5c59c;
  border-radius: 4px;
  margin: 8px 1px 1px 1px;
`;

const StyledImage = styled.img`
  width:50px;;
`;

const StyledProductImage = styled(Col)`
  padding: 0px;
`;

const StyledProductName = styled.p`
  padding-top: 5px;
  font-size: 17px;
  color: #000000de;
  margin-bottom: 2px; 
`;

const StyledPrice = styled.p`
  color: #00000099;
  font-size: 10px;
  margin-bottom:0px;
  
`;

const StyledAsd = styled(Col)`
  padding:0px 10px 0px 10px;
`
const prods = ["Sabun", "Roti", "Piring", "Sendok"];

type Props = {
  title: string,
};
/**
 * @param {String} props.title
 * @return {React.Node}
 */
export default function ProductCard({ title }: Props): React.Node {
  return (
    <StyledAsd md="3">
      <StyledContainer>
        <Row>
          <StyledHeaderCard>
            <div className="float-right">
              <Dot src={dot} alt="dot" />
            </div>

            <StyledTitleCard>
              {title}
            </StyledTitleCard>
          </StyledHeaderCard>
        </Row>

        <StyledTopProduct>
          <StyledProductImage md="2">
            <StyledImage src={product} alt="product" />
          </StyledProductImage>
          <Col md="8">
            <StyledProductName>Baju</StyledProductName>
            <StyledPrice>
              Rp XXXX <div className="float-right">[jml terjual]</div>
            </StyledPrice>
          </Col>
        </StyledTopProduct>

        {prods.map((prod) => (
          <StyledProduct>
            <StyledProductImage md="2">
              <StyledImage src={product} alt="product" />
            </StyledProductImage>
            <Col md="8">
              <StyledProductName>{prod}</StyledProductName>
              <StyledPrice>
                Rp XXXX <div className="float-right">[jml terjual]</div>
              </StyledPrice>
            </Col>
          </StyledProduct>
        ))}
      </StyledContainer>
    </StyledAsd>
  );
}
