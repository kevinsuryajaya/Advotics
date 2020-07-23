import * as React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "reactstrap";

import NavBar from "../../component/navbar";
import SideBar from "../../component/sidebar";
import Header from "../../uikits/header";
import Filter from "../../component/filter";
import Banner from "../../component/banner";
import Card from "../../component/card";
import Chart from "../../component/chart";
import ProductCard from "../../component/productcard";

const StyledPanel = styled.div`
  margin-top: 3.7rem;
  margin-left: 4rem;
  padding-bottom: 1.5rem;
  background-color: #f7f7f7;
`;

const StyledContainer = styled(Container)`
  padding: 30px 0px 0px 0px;
`;

/**
 * @returns {React.Node}
 */
export default function Dashboard() {
  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
      <main id="main">
        <StyledPanel>
          <StyledContainer>
            <Row>
              <Col md="6">
                <Header text="Dashboard" />
              </Col>
              <Col md="6">
                <Filter />
              </Col>
            </Row>
            <Banner />
            <Card />
            <Row>
              <Chart />
              <ProductCard title={"BEST SELLING SKU"}/>
              <ProductCard title={"TOP COMPETITOR SKU"}/>
            </Row>
          </StyledContainer>
        </StyledPanel>
      </main>
    </React.Fragment>
  );
}
