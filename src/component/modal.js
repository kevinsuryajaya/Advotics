import * as React from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "react-calendar/dist/Calendar.css";
import "../scss/modal.scss";
import DateTimeRangeContainer from "react-advanced-datetimerange-picker";

import calendar from "../image/calendar.png";

export default function CustomModal({ toggle, modal, start, end, applyCallback, rangeCallback, ranges, local, descendingYears }: Props): React.Node {
  const [customModal, setModal] = React.useState(modal);

  const customtoggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={customModal} toggle={customtoggle}>
        <ModalHeader toggle={toggle}>
          <img src={calendar} alt="calendar" /> Period
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="5">
              <DateTimeRangeContainer
          ranges={ranges}
          start={start}
          end={end}
          local={local}
          applyCallback={applyCallback}
          rangeCallback={rangeCallback}
          autoApply
          descendingYears={descendingYears}
          years={[2019, 2020]}
          standalone
          style={{
            
            fromDate: {
              color: "#289E45",
              backgroundColor: "#7AE28C",
            },
            toDate: { color: "#289E45",backgroundColor: "#7AE28C" },
            betweenDates: {
              backgroundColor: "#ebf9f7",
            },
            hoverCell: { color: "green" },
            customRangeButtons: { color: "#707070c4",backgroundColor: "white" },
            customRangeSelected: { backgroundColor: "#37B04C"},
            standaloneLayout: { display: "flex", maxWidth: "fit-content" },
          }}
        />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}
