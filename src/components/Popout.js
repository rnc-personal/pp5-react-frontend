import React from "react";
import { Dropdown } from "react-bootstrap";

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