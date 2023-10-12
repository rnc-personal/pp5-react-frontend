import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import noResults from "../../assets/not_found_sm.png";

import PopularProfiles from "./PopularProfiles";
import Build from "../builds/Build";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { useSetProfileData, useProfileData } from "../../contexts/ProfileDataContext";
import { ProfileEditDropdown } from "../../components/Popout";

import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();
    const { id } = useParams()
    const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
    const { pageProfile } = useProfileData();
    const [profile] = pageProfile.results;
    const is_creator = currentUser?.username === profile?.creator;

    const [profileBuilds, setProfileBuilds] = useState({ results: [] });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{ data: pageProfile }, { data: profileBuilds }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}`),
                    axiosReq.get(`/builds/?creator__profile=${id}`),

                ])
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] }
                }))
                setProfileBuilds(profileBuilds);
                setHasLoaded(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id, setProfileData])

    const mainProfile = (
        <>
            {profile?.is_creator && <ProfileEditDropdown id={profile?.id} />}
            <Row noGutters className="px-3 text-center justify-content-flex-start">
                <Col lg={3} className="text-lg-left">
                    <Image className={styles.ProfileImage} src={profile?.profile_image} />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.creator}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2" >
                            <div>
                                <p>
                                    BUILDS:
                                </p>
                                {profile?.builds_count}
                            </div>
                        </Col>
                        <Col xs={3} className="my-2" >
                            <div>
                                <p>
                                    FOLLOWERS:
                                </p>

                                {profile?.followers_count}
                            </div>
                        </Col>
                        <Col xs={3} className="my-2" >
                            <div>
                                <p>
                                    FOLLOWING:
                                </p>
                                {profile?.following_count}
                            </div>
                        </Col>
                    </Row>
                </Col>
                
                    {currentUser && !is_creator && (
                        profile?.following_id ? (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                                onClick={() =>  handleUnfollow(profile) }
                            >
                                UNFOLLOW
                            </Button>
                        ) : (
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Black}`}
                                onClick={() => handleFollow(profile)}
                            >
                                FOLLOW
                            </Button>
                        ))}
                
                {profile?.content && <Col className="p-3">{profile.content}</Col>}
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{profile?.creator}'s builds</p>
            {profileBuilds.results.length ? (
                <InfiniteScroll
                    children={profileBuilds.results.map((build) => (
                        <Build key={build.id} {...build} setBuild={setProfileBuilds} />
                    ))}
                    dataLength={profileBuilds.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!profileBuilds.next}
                    next={() => fetchMoreData(profileBuilds, setProfileBuilds)} />

            ) : (
                <Asset src={noResults}
                    message={`No results found, ${profile?.creator} hasn't posted yet.`}
                />
            )
            }

            <hr />
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default ProfilePage;