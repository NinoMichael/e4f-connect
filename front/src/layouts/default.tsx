import { Outlet } from 'react-router-dom';
import Header from '../components/inc/Header';
import SocialLink from '../components/inc/SocialLink';

const DefaultLayout = () => {
    return (
        <div className="relative">
            <Header />

            <main className='mt-4 md:mt-0'>
                <Outlet />
            </main>

            <SocialLink />
        </div>
    )
}

export default DefaultLayout;