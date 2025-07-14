import { Button } from 'primereact/button';

const ManagerToolbar = () => {
    return (
        <div className="bg-white py-6 flex justify-between items-center border-b border-gray-200">
            <div>

            </div>

            <div className="flex items-center gap-6">
                <Button 
                    icon="pi pi-bell"
                />
                <Button 
                    icon="pi pi-inbox"
                />
            </div>
        </div>
    )
}

export default ManagerToolbar;