import wallpaper from '../assets/img/dotawallpaper.jpg';

export default function WallpaperDota(props) {
    return (
        <div className="dota-wallpaper">
            <img alt="" className={props.class} src={wallpaper} />
        </div>
    );
}