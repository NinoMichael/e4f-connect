import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { getUser } from '../../../hooks/useUser';

import userSample from '../../../assets/user.png';

const MemberToolbar = () => {
    const user = getUser();

    return (
        <div className="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-200">
            <div>
                <h1 className='font-semibold text-2xl'>
                    Welcome to your <span className='text-secondary'>workspace</span> !
                </h1>
            </div>

            <div className="flex items-center gap-6">
                <Button 
                    icon="pi pi-bell"
                    title="Notifications"
                    className='!bg-transparent hover:!bg-primary !w-8 !h-8 !text-gray-800 hover:!text-white !outline !outline-gray-300 !rounded-full'
                />

                <Button 
                    icon="pi pi-inbox"
                     title="Messages"
                    className='!bg-transparent hover:!bg-primary !w-8 !h-8 !text-gray-800 hover:!text-white !outline !outline-gray-300 !rounded-full'
                />

                <div className='flex items-center gap-3'>
                    <Avatar 
                        shape='circle'
                        image={userSample}
                        className='opacity-50'
                    />

                    <div className='flex flex-col'>
                        <h5 className='font-semibold'>
                            { user?.user.firstname } { user?.user.lastname.charAt(0) + '.' }
                        </h5>
                        <p className='text-xs'>
                            { user?.identifier }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberToolbar;