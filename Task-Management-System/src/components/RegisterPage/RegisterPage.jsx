import { useEffect, useRef } from 'react';
import { setRegisterData } from '../../ReduxSlices/RegisterSlice';
import RegisterContent from './RegisterContent';
import { useDispatch, useSelector } from 'react-redux';

export default function RegisterPage() {

    const dispatch = useDispatch();
    const RegisterData = useSelector((state) => state.RegisterData);
    let onChangeData = useRef({});

    function handleRegisterInputChange(event) {
        onChangeData.current = { ...onChangeData.current, [event.target.name]: event.target.value }
        // console.log(onChangeData.current[event.target.name]);
        // console.log(event.target.name);
        switch (event.target.name) {
            case "email":
                console.log("this is email")
                if (!event.target.value.length) {
                    console.log("this is empty");
                    console.log(event.target.className);
                }
                break;
            case "password":
                console.log("this is password")
                break;
            default:
                break;
        }
    }

    function handleRegisterSubmit(event) {
        event.preventDefault();
        event.target.RegisterButton.blur();
        dispatch(setRegisterData(onChangeData.current));
    }

    useEffect(() => {
        if (RegisterData.email.length) {
            console.log(RegisterData);
        }
    }, [RegisterData])

    return <>
        <RegisterContent
            handleRegisterSubmit={handleRegisterSubmit} handleRegisterInputChange={handleRegisterInputChange}>
        </RegisterContent>
    </>
}