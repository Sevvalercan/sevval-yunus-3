import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Layout from "../../../component/layout/Layout";
export default function MyHome() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <GridComplexExample />
    </div>
  );
}

function GridComplexExample() {
  return (
    <Form className="mb-2 my-component" style={{ maxWidth: "400px" }}>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Ad Soyad</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-posta</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Adres</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cadde</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Sokak</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Seç...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Onaylıyorum" />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Kaydet
        </Button>
      </div>
    </Form>
  );
}
