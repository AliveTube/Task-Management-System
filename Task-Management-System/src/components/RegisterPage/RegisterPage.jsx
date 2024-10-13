import { useEffect, useRef, useState } from 'react';
import { setRegisterData } from '../../ReduxSlices/RegisterSlice';
import RegisterContent from './RegisterContent';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation } from './RegisterValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const RegisterData = useSelector((state) => state.RegisterData.RegisterData);
    let [validationMessage, setvalidationMessage] = useState({ email: '', userName: '', password: '', confirmPass: '' });
    let [EmailNotUsedBefore, setEmailNotUsedBefore] = useState(true);
    let onChangeData = useRef({});
    let formElem = useRef();

    // Validate input when the input field loses focus (on blur)
    function handleInputValidation(event) {
        checkValidation(event.target, dispatch, setvalidationMessage, onChangeData.current.password);
    }

    // Capture input changes and store the value with useRef
    function handleRegisterInputChange(event) {
        onChangeData.current = { ...onChangeData.current, [event.target.name]: event.target.value };
        setEmailNotUsedBefore(true);
    }

    // Handle the Register Submition Event
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        event.target.RegisterButton.blur();
        if (checkValidation(formElem.current.email, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.userName, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.password, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.confirmPass, dispatch, setvalidationMessage, onChangeData.current.password)) {
            try {
                await dispatch(setRegisterData(onChangeData.current));
            }
            catch (error) {
                console.error("Error dispatching register data:", error);
            }
        }
    }

    // Initialize and reset registration data on component mount and unmount
    useEffect(() => {
        dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
        return () => {
            dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
        };
    }, []);

    // Post registration data to the server; handle response and errors
    useEffect(() => {
        if (RegisterData.email || RegisterData.userName || RegisterData.password || RegisterData.confirmPass) {
            axios.post('http://localhost:3000/api/register', RegisterData)
                .then(response => {
                    if (response.data.error) {
                        setEmailNotUsedBefore(false);
                        setvalidationMessage((oldState) => {
                            return { ...oldState, email: "This email is already in use. Please try another." }
                        })
                        dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
                    }
                    else {
                        navigate("/login");
                        dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
                        setTimeout(()=>{
                            alert("Registration successful! Please log in now.");
                        }, 100)
                    }
                })
                .catch(error => {
                    console.error('Error:', error.message);
                });
        }
    }, [RegisterData]);

    return <>
        <RegisterContent
            handleRegisterSubmit={handleRegisterSubmit} handleRegisterInputChange={handleRegisterInputChange} formElem={formElem}
            handleInputValidation={handleInputValidation} validationMessage={validationMessage} EmailNotUsedBefore={EmailNotUsedBefore}>
        </RegisterContent>
    </>
}