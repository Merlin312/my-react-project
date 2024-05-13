import ChangeTheme from './todoItem/ChangeTheme';
import ComplatedButton from './todoItem/ComplatedButton';

const TodoItem = ({ theme, setTheme }) => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <ComplatedButton />
    </div>
  );
};
export default TodoItem;
