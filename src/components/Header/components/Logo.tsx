import styles, { highlight } from './styles';

const Logo = () => (
  <div css={styles}>
    note<span css={highlight}>Me</span>
  </div>
);

export default Logo;
