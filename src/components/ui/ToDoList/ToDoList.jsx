// components
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";

// store
import useToDoStore from "../../store/useToDoStore";

const ToDoList = () => {
  const todos = useToDoStore((state) => state.todos);

  console.log(todos);

  return (
    <>
      <AddToDo />
      <div>
        <ul className="text-center">
          Tasks list
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
