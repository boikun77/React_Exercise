import React from "react";
import styled, { keyframes } from "styled-components";

function App() {
  interface BoxProps {
    bgColor: string;
  }

  const spinning = keyframes`
    0%{
      transform: rotate(0deg);
      border-radius: 0px;
    }
    50%{
      transform: rotate(360deg);
      border-radius: 100px;
    }
    100%{
      transform: rotate(0deg);
      border-radius: 0px;
    }
  `;

  const Father = styled.div`
    display: flex;
  `;

  const Box = styled.div<BoxProps>`
    background-color: ${(props) => props.bgColor};
    width: 200px;
    height: 200px;
    animation: ${spinning} 1s linear infinite;
    align-items: center;
    justify-content: center;
    display: flex;
    span {
      font-size: 50px;

      &:hover {
        font-size: 100px;
      }
    }
  `;
  const Circle = styled(Box)`
    border-radius: 100px;
  `;

  return (
    <Father>
      <Box bgColor="blue">
        <span>🥰</span>
      </Box>
    </Father>
  );
}

export default App;
