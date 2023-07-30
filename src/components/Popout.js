import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import styles from "../styles/Popout.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <sub
    ref={ref}
    className={styles.DropDownToggle}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    EDIT
  </sub>
));

export const Popout = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto"
      drop="down">
      <Dropdown.Toggle as={CustomToggle} />

      <Dropdown.Menu
        className={`${styles.DropDownMenu} text-center`}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <sub>EDIT</sub>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >

          <sub>DELETE</sub>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={CustomToggle} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <p>
            EDIT PROFILE
          </p>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <p>
            CHANGE USERNAME
          </p>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
          >
          <p>
            CHANGE PASSWORD
          </p>
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};