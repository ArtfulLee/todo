// store
import useToDoStore from "../../store/useToDoStore";

/**
 *
 * @param {object} props
 * @param {object} todo - Объект ToDo.
 * @param {object} todo.id -  Идентификатор объекта ToDo.
 * @param {object} todo.title -  Текст объекта ToDo.
 * @returns {JSX.Element}
 */
const ToDo = (props) => {
  const deleteToDo = useToDoStore((state) => state.deleteToDo);

  // Обработчик удаления ToDo
  const handleDeleteToDo = (id) => {
    deleteToDo(id);
  };

  const { todo } = props;
  return (
    <>
      <div className="flex justify-center space-x-1">
        <textarea
          className="p-1 md:min-w-96 h-[34px] cursor-default read-only:outline-none overflow-hidden"
          readOnly
          value={todo.title}
        ></textarea>
        <button
          className="self-end p-1 border border-red-300 bg-red-300"
          type="button"
          onClick={() => handleDeleteToDo(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ToDo;
