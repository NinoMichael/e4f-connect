import { forwardRef, useImperativeHandle } from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog';

export type LogoutDialogHandle = {
    show: () => void;
};
  
type LogoutDialogProps = {
    handleLogout: () => void;
};

const LogoutDialog = forwardRef<LogoutDialogHandle, LogoutDialogProps>(
    ({ handleLogout }, ref) => {
      useImperativeHandle(ref, () => ({
            show: () => {
                confirmDialog({
                    message: 'Are you sure you want to log out?',
                    header: 'Confirmation',
                    icon: 'pi pi-exclamation-triangle',
                    accept: handleLogout,
                    defaultFocus: 'accept',
                });
            }
      }));
  
      return <ConfirmDialog 
                className="!text-sm"
                pt={{
                    rejectButton: { className: '!text-primary' },
                    acceptButton: { className: '!text-white !bg-primary' }
                }}
            />;
    }
);

export default LogoutDialog;
