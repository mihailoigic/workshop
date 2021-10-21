import NavbarFunc from '../components/Navbar.js';
import WallpaperCS from '../components/Wallpaper.js';
import AboutGame from '../components/AboutGame.js';
import WallpaperLoL from './WallpaperLoL.js';
import WallpaperDota from './WallpaperDota.js';
import Footer from '../components/Footer.js';

export default function GamesDescription() {
    return (
        <>
            <NavbarFunc id="site-navbar" />
            <WallpaperCS description={false} />
            <AboutGame id="cs" game="Counter Strike" 
                text1="Counter-Strike: Global Offensive (CS: GO) je multiplejer pucačina iz prvog lica koju su razvili Valve i Hidden Path Entertainment. To je četvrta igra u seriji Counter-Strike."
                text2="Igra suprotstavlja dva tima, teroriste i antiteroriste, u različitim načinima igre zasnovanim na objektivima. Najčešći načini igre uključuju teroriste koji postavljaju bombu dok protivteroristi pokušavaju da ih zaustave, ili protivteroriste koji pokušavaju da spasu taoce koje su teroristi zarobili. Postoji osam službenih načina igre, od kojih svi imaju različite karakteristike specifične za taj način igre. Igra takođe ima podršku za povezivanje koja omogućava igračima da igraju na namenskim Valve serverima, pored servera u zajednici sa prilagođenim mapama i režimima igre. Režim igre battle-royale po imenom Danger Zone, uveden je u decembru 2018."
                text3="Postoje tri načina treniranja u Adria Gejming Akademiji: Pojedinačni trening, Mesečni individualni treninzi, Mesečni timski treninzi."
                text4="Pojedinačni trening predstavlja vid treninga u kome možete da se uverite kvalitetom rada naših trenera, predstavlja samo jedan trening od 1h i radi se po planu pojedinačnih treninga"
                text5="Mesečni individualni paket pruža 3 treninga nedeljno po 1h, tj. 12 treninga mesečno. Poenta mesečnih treninga je da se napredak isplanira i sprovede u najoptimalnijem vremenu, da se pruži konstantnost i osiguran razvoj u svim segmentima igre."
                text6="Mesečni timski paket pruža 2 treninga nedeljno po 2h, tj. 8 treninga mesečno. Pokazuju se taktike, pronalaze se uloge, postavljanje strukture ekipe, gledanje demoa, ukazivanje na greškama, gledanje praceva. Razvoj timske igre i kohezije u celokupnom planu."
            />
            <WallpaperLoL class="wallpaperLol-game" />
            <AboutGame id="lol" game="League of Legends" class="about-lol"
                text1="League of Legends (LoL) je višekorisnička onlajn borbena arena koju je razvila i izdala kompanija Riot Games."
                text2="U LoL-u, igrači preuzimaju ulogu nevidljivog prizivača koji kontroliše heroja sa jedinstvenim magijama i bore se protiv tima drugih igrača ili kompjuterski upravljanim herojima. Cilj je obično da se uništi protivnički Nexus, konstrukcija koja se nalazi u srži baze zaštićena odbrambenim strukturama, iako postoje i drugi režimi igre. Svaki LoL meč je diskretan, gde svi heroji počinju igru poprilično slabi, ali povećavaju snagu tako što stiču stvari i Iskustvo kroz tok igre. Heroji I svet uklapaju se u razne elemente, uključujući Visoka fantastika, Stimpank, Folklor, i Lovkraftijanski horor."
            />
            <WallpaperDota class="wallpaperDota-game" />
            <AboutGame id="dota" game="Dota 2" class="about-dota"
                text1="Dota 2 je naslov razvijen od strane Valve Corporation. Dota 2 predstavlja samostalni nastavak popularnog Warcraft III scenarija Defense of the Ancients."
                text2="Igra se sastoji isključivo od online multiplayer baziranih sesija, sa primarnim ciljem svakog meča da timovi unište neprijateljsko utvrđenje koje se zove Ancient Fortress. Svaki igrač zauzima poziciju heroja, kome je data odgovornost učestvovanja u timskim bitkama, koje se u globalu događaju duž koridora, ispunjenih odbrambenim kulama, koji spajaju dve neprijateljske baze. Ogroman deo Defense of the Ancients mehanike igre je prenet i na Dota 2 zahvaljujući vodećem dizajneru (poznatom kao IceFrog) koji je najduži i trenutni programer Warcraft III mod-a. Dota 2 označava Valve-ovu prvu fantazi, kao i akcionu RTS igru."
            />
            <Footer class="footer-game"/>
        </>
    );
}