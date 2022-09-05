import { css } from "styled-components";

type MobileType = {
    [key:string]: string
};

export const mobile = (props: MobileType) => {
  return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }
  `;
};
