import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export const useRedirect = () => {
    const navigateTo = useNavigate();
    const { isAuthenticated, hasRole } = useAuth();

    const handleRedirect = () => {
        if ( isAuthenticated() ) {
            if ( hasRole('member') ) {
                navigateTo('/member/dashboard');
            } else {
                navigateTo('/manager/dashboard');
            }
        }
        else {
            navigateTo('/login');
        }
    }

    return handleRedirect
}