// components.
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";

// store.
import useToDoStore from "../../store/useToDoStore";

/**
 * Компонент списка ToDo.
 * @returns {JSX.Element}
 */
const ToDoList = () => {
  const todos = useToDoStore((state) => state.todos);

  return (
    <>
      <AddToDo />
      <ul className="py-2 px-4 space-y-1">
        <div className="text-center text-l underline cursor-default">
          ToDo List
        </div>
        {!!todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <ToDo todo={todo} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ToDoList;
