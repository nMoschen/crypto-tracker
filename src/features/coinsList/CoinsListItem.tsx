import styled from "styled-components";
import { Coin } from "../../shared/models";

const StyledCoinItem = styled.div`
  background-color: rgb(217 241 255 / 20%);
  box-shadow: 1px 1px 4px rgb(0 0 0 / 10%);
  border-radius: 6px;
  padding: 12px;
  align-items: center;
  display: grid;
  grid-template-columns: 32px 1fr 2fr;
  grid-gap: 12px;
`;

const StyledLogo = styled.img`
  width: 100%;
`;

const StyledId = styled.div`
  font-weight: 500;
  color: #414f55;
`;

const StyledRateContainer = styled.div`
  text-align: right;
`;

const StyledRate = styled.span`
  font-weight: 500;
  color: #414f55;
`;

const StyledTime = styled.div`
  font-size: .75rem;
  color: #4e6672;
  margin-top: 6px;
`;


export function CoinsListItem({ id, rates, logo }: Coin) {
  const selectedRate = rates[0];
  const { date, currency, rate } = selectedRate;
  return (
    <StyledCoinItem>
      <StyledLogo src={ logo }></StyledLogo>
      <StyledId>{ id }</StyledId>
      <StyledRateContainer>
        <StyledRate>{ currency } { rate.toFixed(2) }</StyledRate>
        <StyledTime>{ `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` }</StyledTime>
      </StyledRateContainer>
    </StyledCoinItem>
  )
}