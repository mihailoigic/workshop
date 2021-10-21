import NavbarFunc from '../components/Navbar.js';
import WallpaperCS from '../components/Wallpaper.js';
import WallpaperLoL from '../components/WallpaperLoL.js';
import WallpaperDota from '../components/WallpaperDota.js';
import AboutUs from '../components/AboutUs.js';
import Coaches from '../components/Coaches.js';
import Pricing from '../components/Pricing.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

export default function Root() {
    return (
        <>
            <NavbarFunc id="site-navbar" />
            <WallpaperCS description={true} />
            <AboutUs />
            <Pricing />
            <WallpaperLoL class="wallpaperLol" />
            <Contact />
            <WallpaperDota class="wallpaperDota" />
            <Coaches />
            <Footer />
        </>
    );
}