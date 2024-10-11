import { Outlet } from "react-router-dom";
import Aside from "../Tasks/Aside";

export default function Home(){

    return(
        <>
            <div style={{display: 'flex'}}>
                <Aside/>
                <Outlet />
            </div>
        </>
    )
}