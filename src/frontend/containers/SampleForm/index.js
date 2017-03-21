import React from "react";
import cmz from "cmz";
import SubmitButton from "../../components/SubmitButton";

const form = cmz('background: lightgrey; border: 1px solid grey; padding: 40px 50px;');

module.exports = function SampleForm(props) {

    if (props.error) {
        return <div style={{color: 'red'}}>{props.error.toString()}</div>
    }

    let canSubmit = props.form.text && props.form.checkbox.isChecked;

    return <div>
        <form className={form}>
            <input type="text" value={props.form.text} onChange={props.onTextChange}/>
            <input type="checkbox" checked={props.form.checkbox.isChecked} onChange={props.onCheckboxChange}/>
            <SubmitButton canSubmit={canSubmit} isSubmitting={props.isSubmitting} onClick={props.onSubmit}/>
        </form>
    </div>
}
