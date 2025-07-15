import { Outlet } from 'react-router-dom';
import MemberSidebar from '../components/layouts/member/Sidebar';
import MemberToolbar from '../components/layouts/member/Toolbar';

const MemberLayout = () => {
    return (
        <div className='flex'>
            <div className='w-[22vw]'>
                <MemberSidebar />
            </div>

            <div className='w-full'>
                <header>
                    <MemberToolbar />
                </header>

                <main className='px-6 mt-4'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MemberLayout;