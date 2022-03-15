import React from 'react'
import SWCard from './SWCard'

const SWCardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <SWCard
                            key={i}
                            id={robots[i].name}
                            name={robots[i].height}
                            email={robots[i].mass}
                        />
                    );
                })
            }
        </div>
    );
}

export default SWCardList;