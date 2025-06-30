import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/viva-light/theme.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Login from './pages/login';

function App() {
    return (
        <>
            <AnimatePresence mode="wait">
                <div>
                    <Routes>
                        <Route path="/" element={<Homepage />}/>
                        <Route path="/login" element={<Login />}/>
                    </Routes>
                </div>
            </AnimatePresence>
        </>
    )
};

export default App;