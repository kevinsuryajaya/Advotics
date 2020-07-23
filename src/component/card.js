import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

import downarrow from "../image/DownArrow.svg";
import cart from "../image/SalesTurnover.svg";
import dot from "../image/dot.svg";

const Panel = styled(Row)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const BodyCard = styled(Col)`
  background-color: #ffffff;
  border: 0.5px solid;
  border-color: #d2d2d2;
  padding: 10px;
`;

const Arrow = styled.img`
  width: 6px;
  margin-bottom: 2px;
`;
const Dot = styled.img`
  width: 9px;
  padding-bottom:3px;
`;
const Cart = styled.img`
  width: 100%;
`;

const StyledHeader = styled.h6`
  font-weight: 700;
`;

const StyledLabel = styled.div`
  font-size: 9px;
`;

const StyledTitleCard = styled.p`
  font-size: 12px;
  color: #707070C4;
  padding-top: 3px;
`;

const StyledCart = styled(Col)`
    padding-left:0px;
`
const StyledDanger = styled.span`
    color:red;
    margin-right: 5px;

`
/**
 * @return {React.Node}
 */

export default function Card() {
  return (
    <Panel>
      <Col md="3">
        <BodyCard>
          <Row>
            <Col md="6">
              <StyledTitleCard>Sales Turnover</StyledTitleCard>
            </Col>

            <Col md="6">
              <div className="float-right">
                <Dot src={dot} alt="dot" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="9">
              <StyledHeader>Rp 3,600,000</StyledHeader>
              <StyledLabel>
                <StyledDanger>
                  <Arrow src={downarrow} alt="Down Arrow" /> 5.27%
                </StyledDanger>
                  last period in products sold
              </StyledLabel>
            </Col>
            <StyledCart md="3">
              <Cart src={cart} alt="Sales Turnover" />
            </StyledCart>
          </Row>
        </BodyCard>
      </Col>
    </Panel>
  );
}
