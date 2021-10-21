import React from "react";
import Image from 'react-bootstrap/Image';
import lvl10 from '../assets/img/lvl10.jpg';
import globalElite from '../assets/img/globalElite.png';
import lolchallenger from '../assets/img/lolchallenger.png';
import dotaimmortal from '../assets/img/dota2immortal.png';

export default function CardItem(props) {
    const renderGameDetails = () => {
        if (props.game === "Counter Strike") {
            return (
                <>
                    <p className="mt-3 ms-3 text-secondary">Faceit rank: <Image alt="" src={lvl10} alt="" className="lvl10-img" /></p>
                    <p className="mt-3 ms-3 text-secondary">MM rank: <Image alt="" src={globalElite} alt="" className="ps-1 global-elite-img" /></p>
                </>
            );
        }
        if (props.game === "League of Legends") {
            return (
                <>
                    <p className="mt-3 ms-3 text-secondary">Rank: <Image alt="" src={lolchallenger} alt="" className="ps-1 challenger-img" /> <span className="text-dark">challenger</span></p>
                </>
            );
        }

        if (props.game === "Dota 2") {
            return (
                <>
                    <p className="mt-3 ms-3 text-secondary">Rank: <Image alt="" src={dotaimmortal} alt="" className="ps-1 challenger-img" /> <span className="text-dark">immortal</span></p>
                </>
            );
        }
    }

    const getCurrentYear = () => {
        return new Date().getUTCFullYear()
    };
    return (
        <>
            <div className="caoches-overlay">
                <Image alt="" src={props.src} className="coaches-img" />
                <p className="text-dark mt-3 ms-3">{props.name}</p>
                <hr className="hr-dark" />
                <p className="mt-3 ms-3 text-secondary">Igra: <span className="text-dark">{props.game}</span></p>
                {renderGameDetails()}
                <p className="mt-3 ms-3 text-secondary">Godine: <span className="text-dark">{getCurrentYear() - props.age}</span></p>
            </div>
        </>
    );
}