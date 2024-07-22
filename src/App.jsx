import Header from "./components/ui/Header/Header";
import ToDoList from "./components/ui/ToDoList/ToDoList";

export default function App() {
  return (
    <>
      <div className="container mx-auto font-mono font-normal text-stone-900 not-italic">
        <Header />
        <ToDoList />
      </div>
    </>
  );
}
