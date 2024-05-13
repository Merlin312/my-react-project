import ChangeTheme from './todoItem/ChangeTheme';
import ComplatedButton from './todoItem/ComplatedButton';

const TodoItem = () => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <ChangeTheme />
      <ComplatedButton />
    </div>
  );
};
export default TodoItem;
