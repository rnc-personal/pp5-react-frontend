import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import CommentForm from "../comments/CommentForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import Build from "./Build";

function BuildPage() {
  const { id } = useParams();
  const [build, setBuild] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: build }, { data: comments }] = await Promise.all([
          axiosReq.get(`/builds/${id}`),
          axiosReq.get(`/comments/?build=${id}`),
        ]);

        setBuild({ results: [build] });
        setComments(comments);
        console.log(build)

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
        <Build {...build.results[0]} setBuild={setBuild} buildPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              build={id}
              setBuild={setBuild}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <sub key={comment.id}>
                {comment.creator}: {comment.content}</sub>
            ))
          ) : currentUser ? (
            <p>No Comments Yet</p>
          ) :
            <p>Login To Leave A Comment</p>
          }
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default BuildPage;