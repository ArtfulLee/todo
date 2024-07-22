// components
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";

// store
import useToDoStore from "../../store/useToDoStore";

/**
 * Компонент списка ToDo
 * @returns {JSX.Element}
 */
const ToDoList = () => {
  const todos = useToDoStore((state) => state.todos);

  return (
    <>
      <AddToDo />
      <div>
        <ul className="text-center cursor-default">
          ToDo List
          {!!todos &&
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <ToDo todo={todo} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
