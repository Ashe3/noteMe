import { css } from '@emotion/react';

export default css`
  font-size: 30px;
  user-select: none;
  cursor: pointer;
`;

export const highlight = css`
  color: white;
  display: inline-block;
  background: #374046;
  padding: 0 5px;
  font-weight: bold;
`;

export const navStyles = css`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 10px;
  }

  li {
    margin: 0 15px;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;
