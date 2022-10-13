import React, {useState} from "react";
import "./com.css";
import "../App.css"
function Carousel({karusel}) {
    const [current, setCurrent] = useState(0);

    const slideKiri = () => {

        if (current == 0) {
            setCurrent(karusel.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const slideKanan = () => {
        if (current == (karusel.length - 1)) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }
    return (
        <div className="karusel">
            <div className="karusel_wrapper">
                {
                karusel.map((karus, index) => {
                    return (
                        <div key={index}
                            className={
                                index == current ? "karusel_card karusel_card_active" : "karusel_card"
                        }>
                            <img src={
                                    karus.gambar
                                }
                                alt=""
                                className="kartu_gambar"/>
                            <div className="kartu_overlay">
                                <h2 className="kartu_judul">
                                    {
                                    karus.title
                                }</h2>
                                {/* 
                <span className="kartu_tahun">{karus.year}</span> */} </div>
                            <div className="karusel_kiri"
                                onClick={slideKiri}>
                                &lsaquo;
                            </div>
                            <div className="karusel_kanan"
                                onClick={slideKanan}>
                                &rsaquo;
                            </div>
                        </div>

                    );
                })
            } </div>
        </div>
    );
}

export default Carousel;
