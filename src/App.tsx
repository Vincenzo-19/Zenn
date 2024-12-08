import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MediTimer from './components/meditimer';
import Main from './components/main';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/meditimer" element={<MediTimer />} />
                </Routes>
                <Main />
                <Footer />
            </Router>
        </>
    );
}

export default App;
