import { setValidInput } from "../../ReduxSlices/RegisterSlice";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;;
let setMessage;

export function checkValidation(element, dispatch, setvalidationMessage, password) {

    setMessage = function (element, Message) {
        setvalidationMessage((oldState) => {
            return { ...oldState, [element.name]: Message }
        })
    }
    let isValid = !isEmptyElement(element)
        && !isShortOrLong(element)
        && !isValidform(element)
        && !isMatch(element, password);

    dispatch(setValidInput({ element: element.name, value: isValid }));
    return isValid;

}

function isEmptyElement(element, setvalidationMessage) {
    if (!element.value.length) {
        setMessage(element, "This is a required field");
        return true;
    }
    else {
        setMessage(element, "");
        return false;
    }
}

function isShortOrLong(element) {
    switch (element.name) {
        case "email":
            if (element.value.length < 5) {
                setMessage(element, "Email should be at least 5 characters long.");
                return true;
            }
            else if (element.value.length > 50) {
                setMessage(element, "Email should not exceed 50 characters.");
                return true;
            }
            else {
                setMessage(element, "");
                return false;
            }
        case "password":
            if (element.value.length < 8) {
                setMessage(element, "Password must be at least 8 characters long.");
                return true;
            }
            else if (element.value.length > 30) {
                setMessage(element, "Password should not exceed 20 characters.");
                return true;
            }
            else {
                setMessage(element, "");
                return false;
            }
        default:
            break;
    }
}

function isValidform(element) {
    switch (element.name) {
        case "email":
            if (!emailRegex.test(element.value)) {
                setMessage(element, "Please enter a valid email address.");
                return true;
            }
            else {
                setMessage(element, "");
                return false;
            }
        case "password":
            if (!passwordRegex.test(element.value)) {
                setMessage(element, "Password must include uppercase, lowercase, number, and special character.");
                return true;
            }
            else {
                setMessage(element, "");
                return false;
            }
        default:
            break;
    }
}

function isMatch(element, password) {
    switch (element.name) {
        case "confirmPass":
            if (element.value != password) {
                setMessage(element, "Passwords do not match.");
                return true;
            }
            else {
                setMessage(element, "");
                return false;
            }
        default:
            break;
    }
}



