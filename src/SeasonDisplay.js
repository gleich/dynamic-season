import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === 'summer' ? 'Lets hit the beach!' : 'Brrr, it is chilly';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
