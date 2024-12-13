// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TimerPage from './pages/timerPage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Timer" element={<TimerPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
