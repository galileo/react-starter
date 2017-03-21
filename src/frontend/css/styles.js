import cmz from "cmz";
import {colors} from "./colors";
import {sizes} from "./sizes";

const standardInput = cmz(`
        background-color: ${colors.clean};
        color: ${colors.normal};
        border: 2px solid ${colors.normal}; 
        border-radius: ${sizes.border.radius};
        padding: 5px 10px;
`);

const standardButton = cmz(`
     &:hover {
        border-color: ${colors.hover};
     }
     
     &[disabled] {
        background-color: ${colors.clean};
        border-color: ${colors.disabled};
        color: ${colors.disabled};
     }
`).compose(standardInput);

const successButton = cmz(`
&{
    border-color: ${colors.success};
    color: ${colors.success}
}   
`).compose(standardButton);

const standardForm = cmz(`
    padding: 40px;
    background-color: #EEEEEE;
    border: ${sizes.border.width} ${colors.disabled} solid;
    border-radius: ${sizes.border.radius}
`);

const validState = cmz(`
    border-color: ${colors.success};
    color: ${colors.success};
`);

const invalidState = cmz(`
    border-color: ${colors.error};
    color: ${colors.error};
`);

export const styles = {
    input: {
        standard: standardInput
    },
    button: {
        standard: standardButton,
        success: successButton
    },
    form: {
        standard: standardForm
    },
    status: {
        valid: validState,
        invalid: invalidState
    }
};
