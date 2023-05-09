import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { Link, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
// import axios from "axios";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-evenly align-items-center">
          <Col lg={8}>
            <div className="d-flex justify-content-center align-items-center">
              <ul className='list'>
                <Link to='/'>
                  <li className='list-item'>Home</li>
                </Link>
                <Link to='/login'>
                  <li className='list-item'>Login</li>
                </Link>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path='/' element={< Page1 />} />
        <Route path='/login' element={< Page2 />} />
      </Routes>
    </>
  );
}

export default App;
