import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ user, redirect }) => {
    if (user === null) {
        return <Navigate replace to={redirect} />;
    }
    return <Outlet />;
};
