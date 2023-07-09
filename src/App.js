import Navbar from '../src/components/Navbar';
import HeroSection from '../src/components/HeroSection';
import AboutUs from '../src/components/AboutUs';
import Services from '../src/components/Services';
import Featured from '../src/components/Featured';

export default function App() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <AboutUs />

            <Services />

            <Featured />
        </>
    );
}
