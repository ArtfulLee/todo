// store.
import { useState, useRef } from "react";
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
  const { todo } = props;

  // Референс для отслеживание нового значения текста ToDo.
  const titleRef = useRef();

  const { deleteToDo, editToDo } = useToDoStore((state) => ({
    deleteToDo: state.deleteToDo,
    editToDo: state.editToDo,
  }));

  // Стейт для отслеживания состояния редактирования ToDo.
  const [isEdit, setIsEdit] = useState(false);

  // Изменение состояний редактирования ToDo.
  const handleSetIsEdit = () => {
    setIsEdit(!isEdit);
  };

  // Обработчик для фиксации изменения текста ToDo.
  const handleOkToDo = (todo) => {
    editToDo(todo.id, titleRef.current.value);
    handleSetIsEdit();
  };
  // Обработчик для отмены изменения текста ToDo.
  const handleCancelToDo = () => {
    handleSetIsEdit();
  };

  // Обработчик для редактирования ToDo.
  const handleEditToDo = () => {
    handleSetIsEdit();
  };
  // Обработчик удаления ToDo.
  const handleDeleteToDo = (todo) => {
    deleteToDo(todo.id);
  };

  return (
    <>
      <div className="flex justify-center space-x-1">
        {isEdit ? (
          <>
            <textarea
              ref={titleRef}
              className="p-1 md:min-w-96 h-[34px] overflow-hidden"
            >
              {todo.title}
            </textarea>
            <button
              className="w-20 self-end p-1 border border-green-300 bg-green-300"
              type="button"
              onClick={() => handleOkToDo(todo)}
            >
              Ok
            </button>

            <button
              className="w-20 self-end p-1 border border-red-300 bg-red-300"
              type="button"
              onClick={() => handleCancelToDo()}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <textarea
              className="p-1 md:min-w-96 h-[34px] cursor-default read-only:outline-none overflow-hidden"
              readOnly
              value={todo.title}
            ></textarea>
            <button
              className="w-20 self-end p-1 border border-yellow-300 bg-yellow-300"
              type="button"
              onClick={() => handleEditToDo(todo)}
            >
              Edit
            </button>
            <button
              className="w-20 self-end p-1 border border-red-300 bg-red-300"
              type="button"
              onClick={() => handleDeleteToDo(todo)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ToDo;
