import { notesContainerStyles } from './styles';

interface Props {
  handleShowSidebar: () => void;
}

const NotesContainer: React.FC<Props> = ({ handleShowSidebar }) => {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div css={notesContainerStyles}>
      {test.map((num, idx) => (
        <div key={idx}>{num}</div>
      ))}
      <button onClick={handleShowSidebar}>click me</button>
    </div>
  );
};

export default NotesContainer;
