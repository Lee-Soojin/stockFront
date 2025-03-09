import styled, { keyframes } from "styled-components";

interface StockPriceBoxProps {
  $direction: boolean;
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const StockPriceBox = styled.div<StockPriceBoxProps>`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  align-items: center;
  background-color: #ffffff;
  padding: 30px 40px;
  border-radius: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    > h1 {
      font-size: 2.4rem;
      font-family: var(--font-family);
      line-height: normal;
      font-style: normal;
      color: #000000;
    }

    > div:nth-child(2) {
      width: 100%;
      max-width: 420px;
      height: 220px;
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      > img {
        object-fit: cover;
      }
    }

    > .price {
      font-size: 4rem;
      font-family: var(--font-family);
      line-height: normal;
      font-style: normal;
      font-weight: 700;
    }

    > .change {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 1.2rem;
      font-family: var(--font-family);
      line-height: normal;
      font-style: normal;
      font-weight: 500;
      color: #545454;
      > p {
        display: inline-flex;
        align-items: flex-end;
        gap: 2px;
        font-size: 1.6rem;
        font-family: var(--font-family);
        line-height: normal;
        font-style: normal;
        font-weight: 500;
        > span {
          display: inline-flex;
          font-size: 1.6rem;
          font-family: var(--font-family);
          line-height: normal;
          font-style: normal;
          font-weight: 500;
          color: ${(props) => (props.$direction ? "#F64E3B" : "#5285FE")};
        }
      }
    }
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: var(--font-family);
  line-height: normal;
  font-style: normal;
  font-weight: 500;
  color: #545454;
  animation: ${pulse} 1.5s infinite;
`;
