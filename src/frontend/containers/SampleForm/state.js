import React from "react";
import Component from "./index.js";

const presets = {}

const isChecked = {
    isChecked: true
};

const notChecked = {
    isChecked: false
}

presets.error = {

    ...presets.init,
    error: new Error('something bad happened')
}

presets.init = {
    error: null,
    form: {
        text: '',
        checkbox: notChecked
    },
    isSubmitting: false
}

presets.submitting = {
    ...presets.init,
    isSubmitting: true
}

presets.formFiled = {
    ...presets.init,
    form: {
        text: 'Some text',
        checkbox: isChecked
    }
}

presets.onlyCheckbox = {
    ...presets.init,
    form: {
        text: '',
        checkbox: isChecked
    }
}

presets.onlyTextField = {
    ...presets.init,
    form: {
        text: 'Only this is not empty',
        checkbox: notChecked
    }
}

// stateful container
module.exports = React.createClass({
    displayName: 'State',

    getInitialState: function () {
        return presets.formFiled
    },

    render: function () {
        return <Component {...this.state} />
    }
})
