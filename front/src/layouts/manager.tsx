import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ManagerToolbar from '../components/layouts/manager/Toolbar';
import ManagerSidebar from '../components/layouts/manager/Sidebar';

const ManagerLayout = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex'>
            <div className='w-[22vw]'>
                <ManagerSidebar
                    visible={visible}
                    setVisible={setVisible}
                />
            </div>

            <div className='w-full'>
                <header>
                    <ManagerToolbar 
                        setVisible={setVisible}
                    />
                </header>

                <main className='px-6 mt-4'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default ManagerLayout;