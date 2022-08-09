import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext';

const LogginGuard = ({children}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default LogginGuard;