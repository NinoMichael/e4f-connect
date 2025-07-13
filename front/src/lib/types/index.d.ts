export type Role = 'member' | 'manager';

export interface User {
    id: number;
    lastname: string;
    firstname: string;
    birth_date: string;
    gender: 'M' | 'F';
    email: string | null;
    contact: string | null;
    avatar: string | null;
    role: Role;
    level: number;
    school: string[] | null;
    certification: string;
    bio: string;
    created_at: string;
    updated_at: string;
}

export interface RoleType {
    id: number;
    identifier: string;
    created_at: string;
    updated_at: string;
    user: User;
}


export interface AuthContextType {
    role: RoleType | null;
    isAuthenticated: () => boolean;
    hasRole: (role: 'member' | 'manager') => boolean;
}