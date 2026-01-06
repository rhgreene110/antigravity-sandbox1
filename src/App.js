import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="glass-card">
                <h1>Hello Richard</h1>
                <p>Welcome to your premium React application.</p>
                <div className="button-group">
                    <button className="primary-btn" onClick={() => navigate('/link1a')}>Link 1A</button>
                </div>
            </div>
        </div>
    );
}

function Link1A() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="glass-card">
                <h1>Link1A</h1>
                <p>This is your second page.</p>
                <div className="button-group">
                    <button className="primary-btn" onClick={() => navigate('/')}>Back Home</button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/link1a" element={<Link1A />} />
        </Routes>
    );
}

export default App;
