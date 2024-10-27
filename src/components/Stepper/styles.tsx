import { styled } from "styled-components";

export const Bar = styled.div`
  min-height: 5px;
  background: #008485;
  transition: width 1s;
  position: relative;
`;

export const BarWrapper = styled.div`
  width: 100%;
  background-color: #d1d1d1;
`;

export const StepCircle = styled.div`
  border-radius: 100%;
  border: 5px solid #bdbdbd;
  width: 20px;
  height: 20px;
  background-color: #d1d1d1;
  position: absolute;
  top: -12.5px;
  left: 0px;
  transition:
    background-color 1s,
    border-color 1s;

  &.selected {
    background-color: #ffffff;
    border-color: #008485;
  }
`;
