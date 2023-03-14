import Image from "next/image";
import styled, { css } from "styled-components";

export default function Button({
  title,
  opacity,
  width,
  onClick,
  smWidth,
  disabled,
  rightIcon,
}) {
  return (
    <ButtonStyle
      disabled={disabled}
      onClick={onClick}
      smWidth={smWidth}
      width={width}
      opacity={opacity}
    >
      {rightIcon ? (
        <ButtonInfo>
          {title} <Image src={rightIcon} width={32} height={32} alt={"logo"} />
        </ButtonInfo>
      ) : (
        title
      )}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  height: 50px;
  border-radius: 18px;
  width: ${(props) => (props.width ? props.width : "auto")};
  background-color: ${({ theme }) => theme.colors.primary_2};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: inset 0px -8px 20px 0px ${({ theme }) => theme.colors.primary_2},
    0px 10px 30px 3px ${({ theme }) => theme.colors.primary_2};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.body};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};

  &:hover {
    transform: ${({ disabled }) =>
      disabled ? css`scale(1)` : css`scale(1.01)`};
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  }

  @media (max-width: 768px) {
    width: ${(props) => (props.smWidth ? props.smWidth : "auto")};
  }
`;
const ButtonInfo = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
