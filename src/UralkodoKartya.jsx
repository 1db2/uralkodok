import React from 'react';

const UralkodoKartya = ({movie}) => {
    return (
        <div className="uralkodo">
            <div>
                <p>{movie.leiras}</p>
            </div>
            <div>
                <img src={movie.kep}/>
            </div>
            <div>
                <span>{movie.urk} -  {movie.urv}</span>
                <h3>{movie.nev}</h3>
            </div>
        </div>
    )
}

export default UralkodoKartya;