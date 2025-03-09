import styled from "styled-components";

interface StockPriceBoxProps {
  $direction: boolean;
}

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
