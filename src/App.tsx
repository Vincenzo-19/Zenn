import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MediTimer from './components/meditimer';
import Main from './components/main';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/meditimer" element={<MediTimer />} />
                </Routes>
                <Main />
            </Router>
        </>
    );
}

export default App;
