import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Timer from './pages/timer';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meditimer" element={<Timer />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
