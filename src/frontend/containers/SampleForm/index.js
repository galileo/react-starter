import React from "react";
import SubmitButton from "../../components/SubmitButton";

module.exports = function SampleForm(props) {

    if (props.error) {
        return <div style={{color: 'red'}}>{props.error.toString()}</div>
    }

    let canSubmit = props.form.text && props.form.checkbox.isChecked;

    return <div>
        <form>
            <input type="text" value={props.form.text} onChange={props.onTextChange}/>
            <input type="checkbox" checked={props.form.checkbox.isChecked} onChange={props.onCheckboxChange}/>
            <SubmitButton canSubmit={canSubmit} isSubmitting={props.isSubmitting} onClick={props.onSubmit}/>
        </form>
    </div>
}
