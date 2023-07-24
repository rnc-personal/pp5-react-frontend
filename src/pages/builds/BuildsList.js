import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import Build from "./Build";

function BuildsList({ message, filter = "" }) {

    const [builds, setBuilds] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchBuilds = async () => {
          try {
            // TO DO: add filter
            const { data } = await axiosReq.get(`/builds/`);
            setBuilds(data);
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
      }, []);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Popular profiles mobile</p>
            {hasLoaded ? (
             <>
             {builds.results.length ? (
                builds.results.map(build => (
                    <Build key={build.id} {...build} setBuilds={setBuilds}/>
                ))
             ) : (
                console.log('not loaded')
             )}
             </>   
            ): (
                <p>Loading...</p>
            )}

            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <p>Popular profiles for desktop</p>
            </Col>
        </Row>
    );
}

export default BuildsList;