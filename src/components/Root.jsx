import { Outlet } from "react-router-dom";
import Header from "./Header";


const Root = () => {
    return (

        <div>
            <div>
                <Outlet></Outlet>
                <Header></Header>
            </div>
        </div>
    );
};

export default Root;