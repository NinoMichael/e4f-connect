export type Role = 'member' | 'manager';

export interface User {
    id: number;
    lastname: string;
    firstname: string;
    birth_date: Date;
    gender: 'M' | 'F';
    email: string | null;
    contact?: string | null;
    role: Role;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: () => boolean;
    hasRole: (role: 'member' | 'manager') => boolean;
}