// constants.
import placeholder from "../../../constants/placeholder";

// react.
import { useRef } from "react";

// store.
import useToDoStore from "../../store/useToDoStore";

/**
 * Компонент для добавления новой ToDo.
 * @returns {JSX.Element}
 */
const AddToDo = () => {
  // Референт на новое ToDo.
  const newToDoRef = useRef();

  // Функция для сброса ввхода в инпут.
  const resetInput = () => {
    newToDoRef.current.value = "";
  };

  const addToDo = useToDoStore((state) => state.addToDo);

  // Обработчик добавления нового ToDo.
  const handleAddToDo = (event) => {
    event.preventDefault();

    /* Fast fix for empty input. */
    if (newToDoRef.current.value.trim() === "") {
      resetInput();
      return alert("You need write the text of the todo");
    }
    /* Fast fix for empty input. */

    addToDo(newToDoRef.current.value);
    resetInput();
  };

  return (
    <>
      <form className="flex justify-center p-4 gap-1">
        <label className="cursor-pointer">
          <div className="text-lg font-semibold">New ToDo</div>
          <input
            ref={newToDoRef}
            className="p-1 border border-stone-300"
            type="text"
            placeholder={placeholder.theTextOfTheToDo}
            required
            autoFocus
          />
        </label>
        <button
          className="w-24 self-end p-1 border border-stone-300 bg-stone-300"
          type="submit"
          onClick={handleAddToDo}
        >
          Add ToDo
        </button>
      </form>
    </>
  );
};

export default AddToDo;
