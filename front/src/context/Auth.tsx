/* eslint-disable react-hooks/exhaustive-deps */
 import { createContext, useContext, useMemo, type ReactNode } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import type { Role, User, AuthContextType } from "../lib/types/index";

interface AuthProviderProps {
    children: ReactNode;
}

interface ProtectedRouteProps {
    children: ReactNode;
    role?: Role;
}

interface PublicRouteProps {
    children: ReactNode;
    restricted?: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const getUser = (): User | null => {
        const user = localStorage.getItem('user');
        if (user) {
            try {
                return JSON.parse(user);
            } catch {
                localStorage.removeItem('user');
                return null;
            }
        }
        return null;
    };

    const isAuthenticated = (): boolean => {
        const token = localStorage.getItem('token');
        const user = getUser();
        return !!token && !!user;
    };

    const hasRole = (role: Role): boolean => {
        const user = getUser();
        const hasRole = user?.role === role;
        return hasRole;
    };

    const value = useMemo(
        () => ({
            user: getUser(),
            isAuthenticated,
            hasRole,
        }),
        []
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
    const { isAuthenticated, hasRole } = useAuth();
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (role && hasRole(role)) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export const PublicRoute = ({ children, restricted = false }: PublicRouteProps) => {
    const { isAuthenticated, hasRole } = useAuth();
    const location = useLocation();

    if (restricted && isAuthenticated()) {
        const isMember = hasRole('member');
        const isManager = hasRole('manager');
        const redirectTo = isMember || isManager ? '/member' : '/';
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

export const MemberRoute = ({ children }: { children: ReactNode }) => (
    <ProtectedRoute role="member">{children}</ProtectedRoute>
);

export const AdminRoute = ({ children }: { children: ReactNode }) => (
    <ProtectedRoute role="manager">{children}</ProtectedRoute>
);