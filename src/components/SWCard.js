import React from 'react';

const SWCard = ({ name, height, mass }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${name}?200x200`} alt="robots" />
            <div>
                <h2>{height}</h2>
                <p>{mass}</p>
            </div>
        </div>
    )
}

export default SWCard