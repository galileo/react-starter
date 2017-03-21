import React from "react";

module.exports = function SubmitButton(props) {

    return props.isSubmitting ?
        <div>Form submitting</div> :
        <button disabled={!props.canSubmit}>Submit</button>
}
