import { useRef } from "react";
import Logo from "../../inc/Logo";
import { Button } from 'primereact/button';
import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser, logout } from "../../../hooks/useUser";
import LogoutDialog, { type LogoutDialogHandle } from "../../ui/LogoutDialog";

import userSample from '../../../assets/user.png';

type MemberSidebarProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

const MemberSidebar = ({ visible, setVisible }: MemberSidebarProps) => {
    const user = getUser();
    const location = useLocation();
    const navigateTo = useNavigate();
    const logoutDialogRef = useRef<LogoutDialogHandle>(null);

    const baseItems = [
        { 
            label: 'Overview', 
            icon: 'pi pi-home',
            url: '/member/dashboard' 
        },
        { 
            label: 'Analytics', 
            icon: 'pi pi-chart-line', 
            url: '/member/analytics' 
        },
        { 
            label: 'Meeting', 
            icon: 'pi pi-calendar', 
            url: '/member/planning' 
        },
        { 
            label: 'Courses', 
            icon: 'pi pi-book', 
            url: '/member/courses' 
        },
        { 
            label: 'Resources',
            icon: 'pi pi-server', 
            url: '/member/resources'
        },
        { 
            label: 'Quizz', 
            icon: 'pi pi-discord', 
            url: '/member/quizz'
        },
        { 
            label: 'Settings', 
            icon: 'pi pi-cog', 
            url: '/member/settings' 
        },
        { 
            label: 'Help', 
            icon: 'pi pi-question-circle', 
            url: '/member/help'
        },
    ];

    const isActiveMenu = (path: string) => location.pathname === path;

    const openLogoutDialog = () => {
        logoutDialogRef.current?.show();
    };

    const handleLogout = () => {
        logout();
        navigateTo('/');
    };

    return (
        <>
            <div className="hidden bg-gray-50 shadow md:flex flex-col justify-between min-h-screen w-full max-w-[260px]">
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
                            icon: { className: 'lg:!ml-6' },
                            label: { className: 'lg:!mr-6' },
                        }}
                        onClick={openLogoutDialog}
                    />

                    <LogoutDialog 
                        ref={logoutDialogRef} 
                        handleLogout={handleLogout} 
                    />
                </section>
            </div>

            <Sidebar
                visible={visible} 
                onHide={() => setVisible(false)}
                className="!bg-gray-50 !min-h-screen !max-w-[15rem] !text-sm"
                pt={{
                    content: { className: '!overflow-y-hidden' },
                    mask: { className: '!bg-gray-500/20' }
                }}
            >
                <section>
                    <div className="flex flex-col justify-center items-center mx-auto p-4 -mt-4">
                        <Avatar 
                            shape='circle'
                            image={userSample}
                            className='opacity-50'
                        />

                        <div className='mt-2 mb-4'>
                            <h5 className='font-semibold'>
                                { user?.user.firstname } { user?.user.lastname.charAt(0) + '.' }
                            </h5>
                            <p className='text-xs'>
                                { user?.identifier }
                            </p>
                        </div>
                    </div>

                    <nav className="-mt-3 space-y-2">
                        {baseItems.map((item) => {
                            const isActive = isActiveMenu(item.url);

                            return (
                                <div
                                    key={item.url}
                                    onClick={() => navigateTo(item.url)}
                                    className={`
                                        flex items-center gap-3 mb-2 px-4 py-2 rounded-md cursor-pointer transition
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

                <section className="mb-6">
                    <Button
                        icon="pi pi-sign-out"
                        label="Sign out"
                        className="w-full !text-secondary !bg-transparent"
                        pt={{
                            label: { className: '!-ml-16' },
                        }}
                        onClick={openLogoutDialog}
                    />
                </section>
            </Sidebar>
        </>
    );
};

export default MemberSidebar;
