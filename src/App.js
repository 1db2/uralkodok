import { useState, useEffect } from "react";
import { uralkodokObj } from './data.js';

import './App.css';
import KeresIcon from './search.svg';
import UralkodoKartya from "./UralkodoKartya.jsx";
import Slider from "./Slider.jsx"

//Kiszamolja hogy az adott ev benne van-e az adott evszazadban
const Evszazad = (ev, evszazad) => {
    const evKezd = (evszazad - 1) * 100 + 1;
    const evVeg = evszazad * 100;
    return ev >= evKezd && ev <= evVeg;
}

//fo komponens
const App = () => {
    //state hookok
    const [uralkodok, setUralkodok] = useState([]);
    const [keresSzoveg, setkeresSzoveg] = useState('');
    const [sliderValue, setSliderValue] = useState(9);

    const uralkodoKeres = (keres) => {
        let talalatok = [];
        for (let i = 0; i < uralkodokObj.length; i++) {
            if (uralkodokObj[i].nev.toLowerCase().includes(keres.toLowerCase()) && Evszazad(uralkodokObj[i].urk, sliderValue)) {
                talalatok.push(uralkodokObj[i])
            }
        }

        setUralkodok(talalatok);
    }

    const handleSliderChange = (value) => {
        setSliderValue(value);

        let talalatok = [];
        for (let i = 0; i < uralkodokObj.length; i++) {
            if (uralkodokObj[i].nev.toLowerCase().includes(keresSzoveg.toLowerCase()) && Evszazad(uralkodokObj[i].urk, value)) {
                talalatok.push(uralkodokObj[i])
            }
            
        }

        setUralkodok(talalatok);
      };

    //effect hook, akkor fut le amikor betolt a weboldal
    useEffect(() => {
        uralkodoKeres('')
    }, [])

    return (
        <div className="app">
            <h1>Árpád-házi uralkodók</h1>

            <div className="keres">
                <input
                    placeholder="Uralkodó keresése"
                    value={keresSzoveg}
                    onChange={(e) => {
                        setkeresSzoveg(e.target.value);
                        uralkodoKeres(e.target.value);
                    }}
                />
                <img 
                    src={KeresIcon}
                    alt="keres"
                    onClick={() => uralkodoKeres(keresSzoveg)}
                />
            </div>

            <Slider onSliderChange={handleSliderChange} />
            

        {
            uralkodok?.length > 0
                ? (
                    <div className="container">
                        {uralkodok.map((uralkodo) => (
                            <UralkodoKartya uralkodo={uralkodo}/>
                        ))}
                    </div>
                ) : (
                    <h2>Nincs találat</h2>
                )
        }

        </div>
    );
}

export default App;
