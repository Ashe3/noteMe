import { css } from '@emotion/react';

export const sidebarStyles = (isShow: boolean) => css`
  background: lightgreen;
  position: fixed;
  height: 100%;
  display: flex;
  padding: 40px 20px;
  top: 0;

  ${isShow
    ? css`
        width: 300px;
        right: 0;
      `
    : css`
        width: 0;
        right: -40px;
      `};

  transition: width 0.5s linear;
`;

export const notesContainerStyles = css`
  padding: 30px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 200px;
    height: 200px;
    background: lightgrey;
    margin: 20px;
  }
`;
