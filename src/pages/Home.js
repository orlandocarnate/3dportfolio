// import React, { Component } from 'react';
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Categories from "../components/renderings-home";
import { Component } from "react";
import "./category-styles.css";
import categories from '../categories.json';

function Home() {
  return (
    <Container>
      <Row className="pb-2 mt-3">

      {categories.map((item) => (
          <Col lg={6} className="d-flex align-items-stretch">
          <div class="portfolio-card">
            <a
              href={item.page}
              class="btn btn-primary"
            >
              <h5>{item.title}</h5>
              <img
                class="img-responsive portfolio-img"
                src={item.image}
              />
              <div class="mb-2 text-center">
                <p>{item.description}</p>
              </div>
            </a>
          </div>
        </Col>
      ))}
      
      </Row>
    </Container>
  );
}

export default Home;
