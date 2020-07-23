import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";

import dot from "../image/dot.svg";

const StyledContainer = styled.div`
  background-color: #ffffff;
  border: 0.5px solid;
  border-color: #cdcdcd;
  border-radius: 2px;
  padding: 10px;
`;

const Dot = styled.img`
  width: 10px;
  padding-top: 2px;
`;
const StyledTitleCard = styled.h6`
  padding-top: 5px;
`;

const StyledHeaderCard = styled(Col)`
  padding-top: 5px;
  padding-bottom: 26px;
`;

const StyledDate = styled.div`
  font-size: 12px;
  border: 1px solid;
  border-color: #d7dae2;
  padding: 4px;
  margin: 2px 20px 0px 0px;
`;
let data = {
  datasets: [
    {
      data: [26000, 20500, 19000, 20500, 17000, 21500, 23500],
      fill: false,
      borderColor: "#FFE854",
      borderWidth: 3,
      // Changes this dataset to become a line
      type: "line",
      legend: false,
    },
    {
      label: "Nett",
      backgroundColor: "#37B04C",

      barThickness: 20,
      data: [25000, 21000, 18000, 19000, 15000, 20000, 23000],
    },
    {
      label: "Gross",
      backgroundColor: "#289E45",

      barThickness: 20,
      data: [2000, 1000, 2000, 3000, 4000, 3000, 1000],
    },
    {
      label: "Average Purchase Value",
      backgroundColor: "#6BE681",
      barThickness: 20,
    },
    {
      label: "Unit per Transaction",
      backgroundColor: "#707070",
      barThickness: 20,
    },
  ],
  labels: ["Jan 12", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
};

export default class Chart extends React.Component {
  render() {
    return (
      <Col md="6">
        <StyledContainer>
          <Row>
            <StyledHeaderCard>
              <div className="float-right">
                <Dot src={dot} alt="dot" />
              </div>
              <StyledDate className="float-right">
                Last 6 months &nbsp;
                <i className="fas fa-chevron-down"></i>
              </StyledDate>

              <StyledTitleCard className="font-weight-normal mt-0">
                AVERAGE PURCHASE VALUE
              </StyledTitleCard>
            </StyledHeaderCard>
          </Row>
          <Bar
            data={data}
            options={{
              scales: {
                xAxes: [
                  {
                    stacked: true,
                    gridLines: {
                      lineWidth: 0,
                      display: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    stacked: true,
                  },
                ],
              },
              legend: {
                labels: {
                  filter: function (legendItem, chartData) {
                    if (legendItem.datasetIndex === 0) {
                      return false;
                    }
                    return true;
                  },
                },
                position: "bottom",
              },
            }}
          />
        </StyledContainer>
      </Col>
    );
  }
}
