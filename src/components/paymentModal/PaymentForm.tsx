import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { paymentSubmit } from "../../services/payment.service";

const PaymentForm = (props: any) => {

  const [payment, setPayment] = useState({})
  const show = props.show;
  const ModalhandleClose = props.handleClose;

  const param = props.campaign._id;

  const handleChange = (event: any)=>{
    setPayment(
      {
        ...payment,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit = async (event:any)=>{
    event.preventDefault()
    let sslUrl = await paymentSubmit(param, payment)
    // console.log(sslUrl)
    window.location.replace(sslUrl);
  }

  return (
    <Modal show={show} onHide={ModalhandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} target="_blank">
          <Row className="mb-5">
            <Form.Group as={Col} controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" 
              name="name"
              onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              name="email"
              onChange={handleChange}/>
            </Form.Group>
          </Row>

          <Row className="mb-5">
            <Form.Group as={Col} controlId="amount">
              <Form.Label>Donate Amount</Form.Label>
              <Form.Control type="number" name="amount"
               onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" name="phone"
               onChange={handleChange}/>
            </Form.Group>
          </Row>

          <Form.Label className="mb-2E">Category</Form.Label>
            <Form.Select 
            className="mb-4" 
            size="lg" 
            aria-label="Default select example"
            name="city" 
            onChange={handleChange}
            required>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagon">Chittagon</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Khulna">Khulna</option>
              <option value="Barisal">Barisal</option>
              Sylhet
            </Form.Select>
            <Modal.Footer>
            <input className="btn btn-lg btn-primary" type="submit"  value="Payment Now"/>
            </Modal.Footer>
        </Form> 
      </Modal.Body>
      
    </Modal>
  );
};

export default PaymentForm;
