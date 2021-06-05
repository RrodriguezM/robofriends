import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <>
            {robots.map((robo) => {
                return (<Card
                    id={robo.id}
                    name={robo.name}
                    email={robo.email}
                    key={robo.id}
                />)
            })}
        </>
    );
}

export default CardList
