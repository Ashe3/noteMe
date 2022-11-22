import Logo from './components/Logo';
import Nav from './components/Nav';
import styles from './styles';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header css={styles}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
