import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Page2 = () => {
    const [First, setFirst] = useState("")
    const [Last, setLast] = useState("")
    const [Email, setEmail] = useState("")
    const [Message, setMessage] = useState("")
    const submit = () => {
        if (First.length > 0 && Last.length > 0 && Email.length > 0 && Message.length > 0) {
            console.log("First name: " + First);
            console.log("Last name: " + Last);
            console.log("Email: " + Email);
            console.log("Message: " + Message);
        } else {
            console.log("empty");
        }
    }
    return (
        <>
            <main>
                <title>Sign in / Sign up</title>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className='d-flex justify-content-center'>
                                <form className="login-card">
                                    <h1 className="login-text mb-5 text-center">Sign in / Sign up</h1>
                                    <div className='d-flex mb-4'>
                                        <input onChange={(e) => setFirst(e.target.value.trim())} className='first-name me-2' type="text" placeholder="First name" />
                                        <input onChange={(e) => setLast(e.target.value.trim())} className='last-name ms-2' type="text" placeholder="Last name" />
                                    </div>
                                    <input onChange={(e) => setEmail(e.target.value.trim())} className='inp mb-4' type="text" placeholder="Email" />
                                    <textarea onChange={(e) => setMessage(e.target.value.trim())} className='inp mb-3' rows={5} placeholder='Message'></textarea>
                                    <div className="d-flex justify-content-start">
                                        <input onClick={() => submit()} className='input-btn me-2 mt-0' type="button" value="Submit" />
                                        <input onClick={() => window.location.reload()} className='input-btn ms-2 mt-0' type="button" value="Reset"/>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Page2;
