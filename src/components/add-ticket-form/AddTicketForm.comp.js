import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import "./add-ticket-form.style.css";

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnchange,
  frmDt,
  FormDataError,
}) => {
  return (
    <div className="bg-light add-new-ticket mt-3">
      <div className="p-5 mb-4 bg-light rounded-3 ">
        <h1 className="text-info text-center">Add New Ticket</h1>
        <hr />
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="subject"
                value={frmDt.subject}
                onChange={handleOnchange}
                placeholder="Subject"
                required
              />
              <Form.Text className="text-danger">
                {FormDataError.subject && "Subject is required"}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Issue Found
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={frmDt.issueDate}
                onChange={handleOnchange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="detail"
              rows="5"
              value={frmDt.detail}
              onChange={handleOnchange}
              required
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" variant="info" block className="mt-2">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  FormDataError: PropTypes.object.isRequired,
};
