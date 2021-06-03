// import React, { Component } from 'react';
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import gallery from "../components/threejs-list.json";

function Threejs() {
  return (
    <Row>
      {gallery.map((item) => (
        <Col lg={6} className="d-flex align-items-stretch pt-5">
          <Card className="h-100">
              <Card.Body className="d-flex flex-column">
              <Card.Title>{item.title}</Card.Title>
              <Card.Img
                src={item.image}
              />
              <Card.Text className="my-2 text-center text-white">
                  {item.description}
              </Card.Text>

              <Button href={item.url} variant="secondary" className="mt-auto">Visit page</Button>

              </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Threejs;
