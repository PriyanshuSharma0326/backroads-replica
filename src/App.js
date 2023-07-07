import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';

import './styles/App.css';

export default function App() {
    return (
        <div className="App">
            <Navbar />

            <HeroSection />

            <AboutUs />
        </div>
    );
}
