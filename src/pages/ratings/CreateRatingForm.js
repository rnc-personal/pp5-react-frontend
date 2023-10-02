import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function CreateRatingForm(props) {
  const { build, setRatings, setBuild, user } = props;
  const [rating_value, setRating] = useState(3);

  const handleChange = (event) => {
    setRating(event.target.value);
     console.log("rating" + " " + rating_value);
     console.log("build_id" + " " + build); 
     console.log("user" + " " + user);
     console.log("profile_id" + " " + user.profile_id);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/ratings/", {
        user: user.profile_id,
        rating_value,
        build,
      });
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: [data, ...prevRatings.results],
      }));
      setBuild((prevBuild) => ({
        results: [
          {
            ...prevBuild.results[0]
          },
        ],
      }));
      setRating(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            type="number"
            max={5}
            min={1}
            value={rating_value}
            onChange={handleChange}
            rows={1}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}

        type="submit"
      >
        SUBMIT
      </button>
    </Form>
  );
}

export default CreateRatingForm;