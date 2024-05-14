import ChangeTheme from './todoItem/ChangeTheme';
import ComplatedButton from './todoItem/ComplatedButton';

const TodoItem = ({ theme, setTheme, todo, addTodo }) => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <ComplatedButton todo={todo} addTodo={addTodo} />
    </div>
  );
};
export default TodoItem;
