import { create } from "zustand";

const useToDoStore = create(() => ({
  todos: [
    {
      id: "1",
      title: "Do a Kickflip!",
    },
    {
      id: "2",
      title: "Do a Heelflip!",
    },
  ],
}));

export default useToDoStore;
