import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Table } from 'react-bootstrap';

const Page1 = () => {
    const [myData, setData] = useState()
    const getData = () => {
        axios.get("http://localhost:3100/data").then(res => {
            setData(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <title>React App</title>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myData?.map((e) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{e?.id}</td>
                                                <td>{e?.name}</td>
                                                <td>{e?.email}</td>
                                                <td>{e?.message}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Page1;
