import React from 'react';
import cmz from 'cmz';

const isSubmitting = cmz('font-color: lightgreen;');

module.exports = function SubmitButton(props) {

    return props.isSubmitting ?
        <span className={isSubmitting}>Submitting ...</span> :
        <button disabled={!props.canSubmit} onClick={props.onClick}>Submit</button>
}
