import Header from '@/components/Header';
import { useState } from 'react';
import NotesContainer from './components/NotesContainer';
import SideBar from './components/SideBar';
import styles from './styles';

const Notes = () => {
  const [showSidebar, setShowSideBar] = useState(false);

  const handleShowSidebar = () => setShowSideBar((isShown) => !isShown);

  return (
    <>
      <Header />
      <div css={styles}>
        <NotesContainer handleShowSidebar={handleShowSidebar} />
        <SideBar isShow={showSidebar} />
      </div>
    </>
  );
};

export default Notes;
