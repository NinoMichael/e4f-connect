import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-light/theme.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, MemberRoute, ManagerRoute, PublicRoute } from './context/Auth';

import ManagerLayout from './layouts/manager';

import Homepage from './pages/home';
import Login from './pages/login';
import MemberDashboard from './features/reports/memberDashboard';
import ManagerDashboard from './features/reports/managerDashboard';
import MemberLayout from './layouts/member';

function App() {
    return (
        <AuthProvider>
            <AnimatePresence mode="wait">
                <div>
                    <Routes>
                        <Route
                            path="/" 
                            element={
                                <PublicRoute>
                                    <Homepage />
                                </PublicRoute>
                            } 
                        />

                        <Route 
                            path="/login" 
                            element={
                                <PublicRoute restricted>
                                    <Login />
                                </PublicRoute>
                            } 
                        />
                        
                        <Route path="/member/" element={
                            <MemberRoute>
                                <MemberLayout />
                            </MemberRoute>
                        }>
                            <Route path="dashboard" element={<MemberDashboard />} />
                        </Route>

                        <Route path="/manager/" element={
                            <ManagerRoute>
                                <ManagerLayout />
                            </ManagerRoute>
                        }>
                            <Route path="dashboard" element={<ManagerDashboard />} />
                        </Route>
                    </Routes>
                </div>
            </AnimatePresence>
        </AuthProvider>
    );
}

export default App;