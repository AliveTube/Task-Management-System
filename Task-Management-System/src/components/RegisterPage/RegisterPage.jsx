import { useEffect, useRef, useState } from 'react';
import { setRegisterData } from '../../ReduxSlices/RegisterSlice';
import RegisterContent from './RegisterContent';
import { useDispatch, useSelector } from 'react-redux';
import { checkValidation } from './RegisterValidation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {

    const dispatch = useDispatch();
    const RegisterData = useSelector((state) => state.RegisterData.RegisterData);
    let onChangeData = useRef({});
    let [validationMessage, setvalidationMessage] = useState({ email: '', userName: '', password: '', confirmPass: '' });
    let formElem = useRef();

    //handle onblur Input event
    function handleInputValidation(event) {
        checkValidation(event.target, dispatch, setvalidationMessage, onChangeData.current.password);
    }

    // Handle the Input Change event (store the data written)
    function handleRegisterInputChange(event) {
        onChangeData.current = { ...onChangeData.current, [event.target.name]: event.target.value }
    }

    // Handle the Register Submition Event
    const navigate = useNavigate();
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        event.target.RegisterButton.blur();
        if (checkValidation(formElem.current.email, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.userName, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.password, dispatch, setvalidationMessage, onChangeData.current.password)
            && checkValidation(formElem.current.confirmPass, dispatch, setvalidationMessage, onChangeData.current.password)) {
            try {
                await dispatch(setRegisterData(onChangeData.current));
                navigate('/login');
            } catch (error) {
                console.error("Error dispatching register data:", error);
            }
        }
    }

    // 
    useEffect(() => {
        dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
        return () => {
            dispatch(setRegisterData({ email: '', userName: '', password: '', confirmPass: '' }));
        };
    }, []);

    useEffect(() => {
        if (RegisterData.email || RegisterData.userName || RegisterData.password || RegisterData.confirmPass) {
            console.log("RegisterData changed:", RegisterData);
        }
    }, [RegisterData]);

    return <>
        <RegisterContent
            handleRegisterSubmit={handleRegisterSubmit} handleRegisterInputChange={handleRegisterInputChange}
            handleInputValidation={handleInputValidation} validationMessage={validationMessage} formElem={formElem}>
        </RegisterContent>
    </>
}