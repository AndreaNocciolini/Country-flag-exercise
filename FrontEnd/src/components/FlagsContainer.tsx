/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import './FlagsContainer.scss';
import FlagCard from './FlagCard';
import '../media/flags.json'
import data from '../media/flags.json';

// const flagsArray = [];

function FlagsContainer() {

    const [flags, setFlags] = useState([])

    useEffect(() => {
        const flagsArray = [];
        Object.values(data).forEach(element => {
            flagsArray.push(element)
        });
        setFlags(flagsArray);
    }, [])

    return (
        <div className="FlagsContainer">
            {data.map((flag: any) => {
                return <FlagCard
                    key={flag.name}
                    props={flag}
                />
            })
            }
        </div>
    );
}

export default FlagsContainer;