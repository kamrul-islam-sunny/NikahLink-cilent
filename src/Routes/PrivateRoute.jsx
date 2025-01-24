import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";


const PrivateRoute = ({children}) => {
    const {user, loading } = useAuth()
    const location = useLocation()

    if(loading)
    {
        return  <Spinner aria-label="Extra large spinner example" size="xl" />
    }

    if(user)
    {
        return children;
    }


    return (
        <Navigate to={'/login'}  state={{from: location}}  replace>

        </Navigate>
    );
};

export default PrivateRoute;