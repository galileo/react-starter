import React from "react";
import { styles } from "../css/styles";

module.exports = function SubmitButton(props) {
    const buttonClass = props.success ? styles.button.success : styles.button.standard;

    return props.isSubmitting ?
        <span>Submitting ...</span> :
        <button className={buttonClass} disabled={!props.canSubmit} onClick={props.onClick}>Submit</button>
};
