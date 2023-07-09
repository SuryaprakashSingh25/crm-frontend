import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PageBreadcrumb } from "./../../components/breadcrumb/Breadcrumb.comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = { subject: "", issueDate: "", detail: "" };
const initialFrmError = {
  subject: "false",
  issueDate: "false",
  detail: "false",
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  useEffect(() => {}, [frmData, frmDataError]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    console.log("Form Submit request received");
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
