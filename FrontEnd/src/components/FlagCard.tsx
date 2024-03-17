import React, { useEffect } from 'react';
import './FlagCard.scss';

function FlagCard(props) {
  useEffect(
    () => {
      console.log(props);
      return
    }
  )
  const data = props.props;
  return (
    <div className="FlagCard">
      <ul>
        <li>
          <div className = "divImg">
            <img src={data.flags?.png} alt="" />
          </div>
        </li>
        <li>{data.name.common}</li>
        <li>{data?.capital ? data.capital[0] : "N\\A"}</li>
        <li>{data.population.toString()}</li>
      </ul>
    </div>
  );
}

export default FlagCard;