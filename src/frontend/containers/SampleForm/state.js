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

presets.empty = {
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
        return presets.init;
    },

    onTextChange: function (e) {
        const form = this.state.form;
        const text = e.target.value;
        const notANumber = !/^[0-9]*$/.test(text);

        if (notANumber) {
            return;
        }

        form.text = text;

        this.setState({form: form});
    },

    onCheckboxChange: function (e) {
        const form = this.state.form;

        form.checkbox = e.target.checked ? isChecked : notChecked;

        this.setState({form: form});
    },

    onSubmit: function (e) {
        e.preventDefault();

        this.setState({isSubmitting: true});

        setTimeout(() => {
            this.setState(presets.empty)
        }, 2000);
    },

    render: function () {
        return <Component {...this.state}
          onTextChange={this.onTextChange}
          onCheckboxChange={this.onCheckboxChange}
          onSubmit={this.onSubmit}
        />
    }
})
