import { Outlet } from 'react-router-dom';
import ManagerToolbar from '../components/layouts/manager/Toolbar';
import ManagerSidebar from '../components/layouts/manager/Sidebar';

const ManagerLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[22vw]'>
                <ManagerSidebar/>
            </div>

            <div className='w-full'>
                <header>
                    <ManagerToolbar />
                </header>

                <main className='px-6 mt-4'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default ManagerLayout