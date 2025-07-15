import { useRef } from "react";
import Logo from "../../inc/Logo";
import { Button } from 'primereact/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from "../../../hooks/useUser";
import LogoutDialog, { type LogoutDialogHandle } from "../../ui/LogoutDialog";


const ManagerSidebar = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const logoutDialogRef = useRef<LogoutDialogHandle>(null);

    const baseItems = [
        { 
            label: 'Overview', 
            icon: 'pi pi-home',
            url: '/manager/dashboard' 
        },
        { 
            label: 'Analytics', 
            icon: 'pi pi-chart-line', 
            url: '/manager/analytics' 
        },
        { 
            label: 'Planning', 
            icon: 'pi pi-calendar', 
            url: '/manager/planning' 
        },
        { 
            label: 'Members', 
            icon: 'pi pi-users', 
            url: '/manager/members' 
        },
        { 
            label: 'Courses', 
            icon: 'pi pi-book', 
            url: '/manager/courses' 
        },
        { 
            label: 'Resources',
            icon: 'pi pi-server', 
            url: '/manager/resources'
        },
        { 
            label: 'Quizz', 
            icon: 'pi pi-discord', 
            url: '/manager/quizz'
        },
        { 
            label: 'Settings', 
            icon: 'pi pi-cog', 
            url: '/manager/settings' 
        },
    ];

    const isActiveMenu = (path: string) => location.pathname === path;

    const openLogoutDialog = () => {
        logoutDialogRef.current?.show();
    };

    const handleLogout = () => {
        logout();
        navigateTo('/');
    }

    return (
        <div className="bg-gray-50 shadow flex flex-col justify-between min-h-screen w-full max-w-[260px]">
            <section>
                <div className="flex justify-center mx-auto p-4">
                    <Logo className="w-32" />
                </div>

                <nav className="px-4 -mt-3 space-y-2">
                    {baseItems.map((item) => {
                        const isActive = isActiveMenu(item.url);

                        return (
                            <div
                                key={item.url}
                                onClick={() => navigateTo(item.url)}
                                className={`
                                    flex items-center gap-3 mb-3 px-4 py-2 rounded-md cursor-pointer transition
                                    ${isActive
                                        ? 'bg-primary text-white font-semibold'
                                        : 'hover:bg-gray-200'}
                                `}
                            >
                                <i className={`${item.icon} ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                <span className="text-sm ml-3">{item.label}</span>
                            </div>
                        );
                    })}
                </nav>
            </section>

            <section className="px-4 mb-6">
                <Button
                    icon="pi pi-sign-out"
                    label="Sign out"
                    className="w-full !bg-secondary"
                    pt={{
                        icon: { className: '!ml-6' },
                        label: { className: '!mr-6' },
                    }}
                    onClick={openLogoutDialog}
                />

                <LogoutDialog 
                    ref={logoutDialogRef} 
                    handleLogout={handleLogout} 
                />
            </section>
        </div>
    );
};

export default ManagerSidebar;
