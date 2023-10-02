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

    const inputValue = parseInt(event.target.value, 10);

    if (!isNaN(inputValue)) {
        // Check if the parsing was successful
        setRating(inputValue); // Update the state with the parsed integer value
      }

     console.log("rating" + " " + rating_value + " " + typeof(rating_value));
     console.log("build_id" + " " + build + " " + typeof(build)); 
     console.log("user" + " " + user + " " + typeof(user));
     console.log("profile_id" + " " + user.profile_id + " " + typeof(user.profile_id));
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
      setRatings(1);
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