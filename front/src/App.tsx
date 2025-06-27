import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';

function App() {
    return (
        <>
            <AnimatePresence mode="wait">
                <div>
                    <Routes>
                        <Route path="/" element={<Homepage />}/>
                    </Routes>
                </div>
            </AnimatePresence>
        </>
    )
};

export default App;