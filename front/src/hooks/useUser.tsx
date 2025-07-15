import type { RoleType } from "../lib/types/index";

export const getUser = (): RoleType | null => {
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

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};