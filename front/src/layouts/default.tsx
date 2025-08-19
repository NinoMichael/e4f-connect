import { Outlet } from 'react-router-dom';
import Header from '../components/inc/Header';

const DefaultLayout = () => {
    return (
        <div>
            <Header />

            <main className='mt-10 md:mt-0'>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;