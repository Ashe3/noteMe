interface Props {
  handleShowSidebar: () => void;
}

const NotesContainer: React.FC<Props> = ({ handleShowSidebar }) => {
  return (
    <div>
      container
      <button onClick={handleShowSidebar}>click me</button>
    </div>
  );
};

export default NotesContainer;
