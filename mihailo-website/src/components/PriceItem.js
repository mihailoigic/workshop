import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import success from '../assets/img/success.png';
import { Link } from 'react-router-dom';

export default function PriceItem(props) {
    return (
        <>
            <div className="pricing-overlay fw-light">
                <div className={`pricing-overlay-inner ${props.color}`}>
                    <p className="text-light pt-3 h4 text-center font-InterBold">{props.type}</p>
                    <p className="text-light pt-3 h5 text-center old-price">{props.priceOld}</p>
                    <p className="text-light h4 text-center">&euro; {props.price}<span className="price-time">{props.time}</span></p>
                    <hr className="hr-pricing" />
                </div>
                <p className="ms-3 mt-3 text-dark"><Image alt="" src={success} className="success-img me-2" />{props.check1}</p>
                <p className="ms-3 text-dark"><Image alt="" src={success} className="success-img me-2" />{props.check2}</p>
                <p className="ms-3 text-dark"><Image alt="" src={success} className="success-img me-2" />{props.check3}</p>
                <div className="text-center">
                    <Link
                        to={"/games"}
                        onClick={() => {
                            window.scrollTo({
                                top: 300,
                                left: 100,
                                behavior: 'smooth'
                            });
                        }}>
                        <Button className={`${props.color} pricing-button`}>Saznaj više</Button></Link>
                </div>
            </div>
        </>
    );
}