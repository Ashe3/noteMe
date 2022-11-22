import { sidebarStyles } from './styles';

interface Props {
  isShow: boolean;
}

const SideBar: React.FC<Props> = ({ isShow }) => {
  return <div css={sidebarStyles(isShow)}>sidebar</div>;
};

export default SideBar;
