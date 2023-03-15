import styled from "styled-components";

export const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #000; */
  opacity: 0.6;
  z-index: 1;
  mix-blend-mode: difference;
  pointer-events: none;
  background-image: linear-gradient(
      to right,
      rgba(255, 0, 138, 0.3) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 255, 148, 0.1) 1px, transparent 1px);
  background-size: 5px 3px;
  overflow: hidden;

  /* mix-blend-mode: multiply; */
`;
