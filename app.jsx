import './App.css';
import logo from './assets/logo-white.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NieuwePost from './pages/NieuwePost';
import Overzicht from './pages/Overzicht';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <div className="page-container">
                <img src={logo} alt="Company logo" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new" element={<NieuwePost />} />
                    <Route path="/overview" element={<Overzicht />} />
                    <Route path="/posts/:id" element={<BlogDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
