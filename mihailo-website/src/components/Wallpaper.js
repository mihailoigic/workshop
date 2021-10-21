import wallpaper from '../assets/img/csowallpaper.jpg';
import TextField from '../components/TextField.js';
import Button from 'react-bootstrap/Button';

export default function Wallpaper(props) {
    function description(){
        if(props.description === true){
            return (
                <>
                    <TextField textUpper="Poboljsaj se u CSGO-u i" textLower="postani profesionalni igrac!" />
                    <Button className="wallpaper-button" variant="dark">Počni sada</Button>
                </>
            );
        }
        
    }
    return (
        <>
            <img alt="" alt="" className="wallpaper" src={wallpaper} />
            {description()}
        </>
    );
}