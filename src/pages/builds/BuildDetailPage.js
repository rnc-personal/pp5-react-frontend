import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import CommentForm from "../comments/CommentForm";
import Comment from "../comments/Comment";
import Rating from "../ratings/Rating";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { fetchMoreData } from "../../utils/utils";
import Asset from "../../components/Asset";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from '../../styles/BuildDetail.module.css';
import Build from "./Build";
import InfiniteScroll from "react-infinite-scroll-component";
import PopularProfiles from "../profiles/PopularProfiles";
import AverageRating from "../ratings/AverageRating";
import CreateRatingForm from "../ratings/CreateRatingForm";


function BuildPage() {
  const { id } = useParams();
  const [build, setBuild] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });
  const [ratings, setRatings] = useState({ results: [] });
  const [activeTab, setActiveTab] = useState('comments');

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: build }, { data: comments }, { data: ratings }] = await Promise.all([
          axiosReq.get(`/builds/${id}`),
          axiosReq.get(`/comments/?build=${id}`),
          axiosReq.get(`/ratings/?build=${id}`)
        ]);

        setBuild({ results: [build] });
        setComments(comments);
        setRatings(ratings);

      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Build {...build.results[0]} setBuild={setBuild} buildPage />
        <AverageRating ratings={ratings} />
        <Container className={appStyles.Content}>
          <h3>{activeTab}</h3>
          <hr />

          <div className={styles.TabWrapper}>
            <div className={styles.Tab} onClick={() => setActiveTab('comments')}>
              Comments
            </div>

            <div className={styles.Tab} onClick={() => setActiveTab('ratings')}>
              Ratings
            </div>
          </div>

          {currentUser && activeTab === 'comments' ? (
            <CommentForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              build={id}
              setBuild={setBuild}
              setComments={setComments}
            />
          ) : comments.results.length && activeTab === 'comments' ? (
            <h3>{comments.results.length} Comments</h3>
          ) : null}

          {currentUser && activeTab === 'ratings' ? (
            <CreateRatingForm
              build={id}
              user={currentUser}
              setBuild={setBuild}
              setRatings={setRatings}
            />
          ) : ratings.results.length && activeTab === 'ratings' ? (
            <h3>{ratings.results.length} Ratings</h3>
          ) : null}

          {activeTab === 'comments' ? (
            comments.results.length ? (
              <>
                <hr className={styles.AccentDivider} />
                <InfiniteScroll
                  children={comments.results.map((comment) => (
                    <Comment
                      key={comment.id}
                      {...comment}
                      setBuild={setBuild}
                      setComments={setComments}
                    />)
                  )}
                  dataLength={comments.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!comments.next}
                  next={() => fetchMoreData(comments, setComments)}
                />
              </>
            ) : currentUser ? (
              <p>No Comments Yet</p>
            ) : null
          ) : activeTab === 'ratings' ? (
            ratings.results.length ? (
              <>
                <hr className={styles.AccentDivider} />
                <InfiniteScroll
                  children={ratings.results.map((rating) => (
                    <Rating
                      key={rating.id}
                      {...rating}
                      setBuild={setBuild}
                      setRatings={setRatings}
                    />)
                  )}
                  dataLength={ratings.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!ratings.next}
                  next={() => fetchMoreData(ratings, setRatings)}
                />
              </>
            ) : currentUser ? (
              <p>No Ratings Yet</p>
            ) : null
          ) : null}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default BuildPage;