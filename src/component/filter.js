import React from "react";
import moment from "moment";

import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Modal from "./modal";
import calendar from "../image/calendar.png";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    let start = moment(new Date(2020, 6, 18, 0, 0, 0, 0));
    let end = moment(start).add(5, "days");
    this.state = {
      start: start,
      end: end,
      modal: false,
    };

    // this.onClick = this.onClick.bind(this);
    this.applyCallback = this.applyCallback.bind(this);
  }

  applyCallback(startDate, endDate) {
    console.log("Apply Callback");
    console.log(startDate.format("DD-MM-YYYY HH:mm"));
    console.log(endDate.format("DD-MM-YYYY HH:mm"));
    this.setState({
      start: startDate,
      end: endDate,
    });
  }

  rangeCallback(index, value) {
    console.log(index, value);
  }

  onClick() {
    let newStart = moment(this.state.start).subtract(3, "days");
    // console.log("On Click Callback");
    // console.log(newStart.format("DD-MM-YYYY HH:mm"));
    this.setState({ start: newStart });
  }

  toggle = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  renderStandalone(ranges, local, maxDate, descendingYears, toggle, modal) {
    console.log(modal);
    const Panel = styled(Row)`
      background-color: #ffffff;
      margin: 0px 0px 0px 0px;
      padding: 5px 0px 5px 0px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 2px;
    `;

    const StyledCol = styled.p`
      font-size: 12px;
      padding: 5px 0px 5px 0px;
      float: right;
      margin: 0px;
    `;

    const StyledImage = styled.img`
      width: 15px;
    `;
    return (
      <Panel className="float-right">
        <Col>
          <StyledCol onClick={this.toggle}>
            <StyledImage src={calendar} alt="calendar" />
            &nbsp; Period &nbsp;
            <span>
              {this.state.start.format("DD MMMM YYYY")} -{" "}
              {this.state.end.format("DD MMMM YYYY")}
            </span>
            &nbsp;
            <i class="fas fa-chevron-down"></i>
          </StyledCol>
        </Col>
        <Modal
          toggle={this.state.toggle}
          modal={this.state.modal}
          ranges={ranges}
          start={this.state.start}
          end={this.state.end}
          applyCallback={this.applyCallback}
          rangeCallback={this.rangeCallback}
        />
      </Panel>
    );
  }

  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start).add(1, "days").subtract(1, "seconds");
    let ranges = {
      Today: [moment(start), moment(end)],
      Yesterday: [
        moment(start).subtract(1, "days"),
        moment(end).subtract(1, "days"),
      ],
      "Last 7 days": [
        moment(start).subtract(7, "days"),
        moment(end).subtract(1, "days"),
      ],
      "Last 30 Days": [
        moment(start).subtract(30, "days"),
        moment(end).subtract(1, "days"),
      ],
      "This Month": [
        moment(start).startOf("months"),
        moment(end).subtract(1, "days"),
      ],
    };
    let local = {
      format: "DD-MM-YYYY",
      sundayFirst: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
    let maxDate = moment(end).add(24, "hour");
    return <div>{this.renderStandalone(ranges, local, maxDate, false)}</div>;
  }
}
export default Filter;
