import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Стор для хранения ToDo
 */
const useToDoStore = create(
  persist(
    (set, get) => ({
      /**
       * Начальный список ToDo
       */
      todos: [
        {
          id: "1",
          title: "Do a Kickflip!",
        },
      ],

      /**
       * Фугкция добавления новой ToDo
       * @param {string} title - Текст нового ToDo
       */
      addToDo: (title) => {
        const newToDo = { id: crypto.randomUUID(), title };
        set({ todos: [...get().todos, newToDo] });
      },
    }),
    /* for localStorage */
    { name: "toDoStorage" }
  )
);

export default useToDoStore;
