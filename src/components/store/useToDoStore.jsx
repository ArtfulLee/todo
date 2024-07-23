import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Стор для хранения ToDo.
 */
const useToDoStore = create(
  persist(
    (set, get) => ({
      /**
       * Начальный список ToDo.
       */
      todos: [
        {
          id: "0",
          title: "First ToDo",
        },
        {
          id: "1",
          title: "Second ToDo",
        },
        {
          id: "2",
          title: "Third ToDo",
        },
      ],

      /**
       * Функция добавления новой ToDo.
       * @param {string} title - Текст нового ToDo.
       */
      addToDo: (title) => {
        const newToDo = { id: crypto.randomUUID(), title };
        set({ todos: [...get().todos, newToDo] });
      },

      /**
       * Функция удаления ToDo.
       */
      deleteToDo: (id) =>
        set({
          todos: [
            ...get().todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        }),

      /**
       * Функция редактирования ToDo.
       */
      editToDo: (id, title) =>
        set({
          todos: [
            ...get().todos.map((todo) => {
              if (todo.id === id) todo.title = title;
              return todo;
            }),
          ],
        }),
    }),
    /* for localStorage. */
    { name: "toDoStorage" }
  )
);

export default useToDoStore;
