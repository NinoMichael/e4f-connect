import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-light/theme.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, MemberRoute, PublicRoute } from './context/Auth';

import Homepage from './pages/home';
import Login from './pages/login';
import MemberDashboard from './features/reports/memberDashboard';

function App() {
    return (
        <AuthProvider>
            <AnimatePresence mode="wait">
                <div>
                    <Routes>
                        <Route path="/" element={<PublicRoute><Homepage /></PublicRoute>} />
                        <Route path="/login" element={<PublicRoute restricted><Login /></PublicRoute>} />
                        <Route path="/member" element={
                            <MemberRoute>
                                <MemberDashboard />
                            </MemberRoute>
                        } />
                    </Routes>
                </div>
            </AnimatePresence>
        </AuthProvider>
    );
}

export default App;