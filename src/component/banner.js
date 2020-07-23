import * as React from "react";
import styled from 'styled-components';
import { Row, Col } from "reactstrap";
import help from "../image/Help.png";

const Panel = styled(Row)`
    background-color: #37B04C;
    margin: 31px 0px 0px 0px;;
    padding: 10px 0px 10px 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius:2px;
`

const Title = styled.p`
    font-weight: 500;
    color: white;
    margin:0px;
    font-size:px
`

const Help = styled.p`
    color:white;
    margin:0px;
    float:right;
    font-size:12px;
    padding-top:5px;

`

/**
 * @return {React.Node}
 */

export default function Banner() {
  return (
    <Panel>
     <Col md="6"><Title>MARKET INSIGHTS</Title></Col>
     <Col md="6"><Help> <img src={help} alt="help" /> <u>Click Here for Help</u> &nbsp; <i class="fas fa-chevron-up"></i> </Help></Col>
    </Panel>
  );
}
