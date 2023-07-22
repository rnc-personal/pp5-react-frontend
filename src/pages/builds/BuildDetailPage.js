import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { axiosReq } from "../../api/axiosDefaults";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

function PostPage() {
const { id } = useParams();
const [build, setBuild] = useState({ results: [] });

useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: build }] = await Promise.all([
          axiosReq.get(`/builds/${id}`),
        //   axiosReq.get(`/comments/?post=${id}`),
        ]);
        setBuild({ results: [build] });
        // setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <p>Post component</p>
        <Container className={appStyles.Content}>
          Comments
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;