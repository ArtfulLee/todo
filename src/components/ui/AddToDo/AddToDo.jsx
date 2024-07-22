// constants
import { useRef } from "react";
import placeholder from "../../../constants/placeholder";

// store
import useToDoStore from "../../store/useToDoStore";

/**
 * Компонент для добавления новой ToDo
 * @returns {JSX.Element}
 */
const AddToDo = () => {
  const newToDoRef = useRef();

  const addToDo = useToDoStore((state) => state.addToDo);

  const handleAddToDo = (event) => {
    event.preventDefault();
    addToDo(newToDoRef.current.value);
  };

  return (
    <>
      <form>
        <div className="flex justify-center p-4 gap-1">
          <label className="cursor-pointer">
            <div className="text-lg font-semibold">New ToDo</div>
            <input
              ref={newToDoRef}
              className="p-1 border border-stone-400"
              type="text"
              placeholder={placeholder.theTextOfTheTask}
              required
            />
          </label>
          <button
            className="self-end p-1 border border-stone-500 bg-stone-200"
            type="submit"
            onClick={handleAddToDo}
          >
            Add ToDo
          </button>
        </div>
      </form>
    </>
  );
};

export default AddToDo;
