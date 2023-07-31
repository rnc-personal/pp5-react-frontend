import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Build from "./Build";
import PopularProfiles from "../profiles/PopularProfiles";

import noResults from "../../assets/not_found_sm.png";

function BuildsList({ message, filter = "" }) {

    const [builds, setBuild] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");

    const { pathname } = useLocation();

    useEffect(() => {
        const fetchBuilds = async () => {
            try {
                // TO DO: add filter
                const { data } = await axiosReq.get(`/builds/?${filter}search=${query}`);
                setBuild(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchBuilds();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile/>
                <Form
                    className=""
                    onSubmit={(event) => event.preventDefault()}
                >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search Builds"
                    />
                </Form>

                {hasLoaded ? (
                    <>
                        <sub>Found: {builds.results.length} Builds</sub>
                        {builds.results.length ? (
                            <InfiniteScroll children={
                                builds.results.map(build => (
                                    <Build key={build.id} {...build} setBuild={setBuild} />
                                ))
                            }
                            dataLength={builds.results.length}
                            loader={<p>Getting Builds...</p>}
                            hasMore={!!builds.next}
                            next={() => {fetchMoreData(builds, setBuild)}}
                            />
                        ) : (
                            <img src={noResults} alt="no results" message={message} />
                        )
                        }
                    </>
                ) : (
                    <>
                        <p>Loading...</p>
                        <img src={noResults} alt="loading" message={message} />
                    </>
                )}

            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles/>
                </Col>
        </Row>
    );
}

export default BuildsList;