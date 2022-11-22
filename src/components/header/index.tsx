import Logo from './components/Logo';
import Nav from './components/Nav';
import styles from './styles';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div css={styles}>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
