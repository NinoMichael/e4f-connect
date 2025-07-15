import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MemberSidebar from '../components/layouts/member/Sidebar';
import MemberToolbar from '../components/layouts/member/Toolbar';

const MemberLayout = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='flex flex-col md:flex-row'>
            <div className='hidden md:block w-[22vw]'>
                <MemberSidebar 
                    visible={visible}
                    setVisible={setVisible}
                />
            </div>

            <div className='w-full'>
                <header>
                    <MemberToolbar setVisible={setVisible}/>
                </header>

                <main className='px-6 mt-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MemberLayout;