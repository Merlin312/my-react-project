import ChangeTheme from './todoItem/ChangeTheme';
import ComplatedButton from './todoItem/ComplatedButton';
import SortAll from './todoItem/SortAll';

const TodoItem = ({ theme, setTheme, todo, addTodo }) => {
  return (
    <div
      style={{
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <ChangeTheme theme={theme} setTheme={setTheme} />
      <ComplatedButton todo={todo} addTodo={addTodo} />
      <SortAll todo={todo} addTodo={addTodo} />
    </div>
  );
};
export default TodoItem;
