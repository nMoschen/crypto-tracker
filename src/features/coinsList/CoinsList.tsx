import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Status } from "../../shared/constants";
import { StyledTitle } from "../../shared/styled";
import { CoinsListItem } from "./CoinsListItem";
import { getCoins, selectCoins } from "./coinsSlice";

const StyledCoinsList = styled.section`
`;

const StyledCoinsListItem = styled.div`
  &:not(:first-of-type) {
    margin-top: 12px;
  }
`;

export function CoinsList() {
  const { status, coins } = useAppSelector(selectCoins);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, []);

  if (status === Status.Loading) {
    return <>Loading...</>;
  }

  return (
    <StyledCoinsList>
      <StyledTitle>Following</StyledTitle>
      {
        coins.map(coin => 
          <StyledCoinsListItem>
            <CoinsListItem { ...coin } key={ coin.id }></CoinsListItem>
          </StyledCoinsListItem>
        )
      }
    </StyledCoinsList>
  )
}
