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
    }

    function handleRegisterSubmit(event) {
        event.preventDefault();
        event.target.RegisterButton.blur();
        dispatch(setRegisterData(onChangeData.current));
    }

    useEffect(() => {
        if (RegisterData) {
            console.log(RegisterData);
        }
    }, [RegisterData])

    return <>
        <RegisterContent
            handleRegisterSubmit={handleRegisterSubmit} handleRegisterInputChange={handleRegisterInputChange}>
        </RegisterContent>
    </>
}