import React from 'react';

export const CatalogItem = ({ advert }) => {
  return (
    <div style={{ width: '264px' }}>
      <img src={advert.img} alt="car" height={268} />

      <div>
        <h2>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </h2>
        <p>{advert.rentalPrice}</p>
      </div>
      <div>{advert.rentalCompany}</div>

      <div>
        {advert.type}&ensp;|&ensp;{advert.make}
        &ensp;|&ensp;{Number(advert.mileage).toLocaleString('en')}
        &ensp;|&ensp;{advert.accessories[0]}
      </div>

      <button>Learn more</button>
    </div>
  );
};
