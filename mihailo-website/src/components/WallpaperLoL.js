import wallpaper from '../assets/img/lolwallpaper.jpg';

export default function WallpaperLoL(props) {
    return (
        <div className="lol-wallpaper">
            <img alt="" className={props.class} src={wallpaper} />
        </div>
    );
}