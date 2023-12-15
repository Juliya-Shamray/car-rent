import {
  StyledImg,
  StyledLi,
  StyledLink,
  StyledList,
  StyledSpan,
  StyledSubText,
  StyledSubTitle,
  StyledText,
  StyledTitle,
  StyledWrap,
} from './AdvertInfo.styled';

export const AdvertInfo = ({ advert }) => {
  const { address } = advert;
  const arr = address.split(',');
  arr.shift();
  const [town, country] = arr;
  const arrOfCondition =
    (advert.rentalConditions.includes('\n')
      ? advert.rentalConditions.split('\n')
      : advert.rentalConditions.split('and')) || [];
  return (
    <>
      <StyledImg src={advert.img} alt="car" />
      <StyledTitle>
        {advert.make}, {advert.year}
      </StyledTitle>
      <StyledWrap>
        {town}&ensp;|&ensp;{country}&ensp;|&ensp;id: {advert.id}
        &ensp;|&ensp;Year: {advert.year}&ensp;|&ensp;Type: {advert.type}
      </StyledWrap>
      <StyledWrap>
        Fuel Consumption: {advert.fuelConsumption}&ensp;|&ensp;Engine Size:{' '}
        {advert.engineSize}
      </StyledWrap>
      <StyledText>{advert.description}</StyledText>
      <StyledSubTitle>Accessories and functionalities:</StyledSubTitle>
      <StyledSubText>
        {advert.accessories.map((item, index, arr) => {
          if (item[index] === item[arr.length - 1]) {
            return <StyledSpan key={item}>{item}</StyledSpan>;
          }
          return <StyledSpan key={item}>{item}&ensp;|&ensp;</StyledSpan>;
        })}
      </StyledSubText>
      <StyledSubTitle>Rental Conditions: </StyledSubTitle>
      <StyledList>
        {arrOfCondition.map(item => {
          const matchResult = item.match(/\d+/);
          if (matchResult) {
            const number = matchResult[0];
            const itemWithoutNumber = item.replace(/\d+/, '');
            return (
              <StyledLi key={item}>
                {itemWithoutNumber}
                <span>{number}</span>
              </StyledLi>
            );
          }
          return <StyledLi key={item}>{item}</StyledLi>;
        })}

        <StyledLi key="Mileage">
          Mileage: <span>{Number(advert.mileage).toLocaleString('en')}</span>
        </StyledLi>
        <StyledLi key="Price">
          Price: <span>{advert.rentalPrice}</span>
        </StyledLi>
      </StyledList>
      <StyledLink href="tel:+380730000000">Rental car</StyledLink>
    </>
  );
};
