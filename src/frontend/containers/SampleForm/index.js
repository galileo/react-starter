import React from "react";
import SubmitButton from "../../components/SubmitButton";
import cmz from "cmz";
import {styles} from "../../css/styles";

const form = styles.form.standard;

module.exports = function SampleForm(props) {

    if (props.error) {
        return <div style={{color: 'red'}}>{props.error.toString()}</div>
    }

    const textClass = cmz().compose([
        styles.input.standard,
        props.form.text ? styles.status.valid : styles.status.invalid
    ]);
    // styles.input.standard.compose(props.form.text ? styles.status.valid : styles.status.invalid);

    const canSubmit = props.form.text && props.form.checkbox.isChecked;

    return <div>
        <form className={form}>
            <input className={textClass} type="text" value={props.form.text} onChange={props.onTextChange}/>
            <input type="checkbox" checked={props.form.checkbox.isChecked}
                   onChange={props.onCheckboxChange}/>
            <SubmitButton success canSubmit={canSubmit} isSubmitting={props.isSubmitting} onClick={props.onSubmit}/>
        </form>
    </div>
};
