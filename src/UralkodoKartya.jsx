import React from 'react';

const UralkodoKartya = ({uralkodo}) => {
    return (
        <div className="uralkodo">
            <div>
                <p>{uralkodo.leiras}</p>
            </div>
            <div>
                <img src={uralkodo.kep}/>
            </div>
            <div>
                <span>{uralkodo.urk} -  {uralkodo.urv}</span>
                <h3>{uralkodo.nev}</h3>
            </div>
        </div>
    )
}

export default UralkodoKartya;
