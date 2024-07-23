import Header from "./components/ui/Header/Header";
import ToDoList from "./components/ui/ToDoList/ToDoList";

export default function App() {
  return (
    <>
      <div className="bg-stone-100 min-h-screen">
        <div className="container mx-auto font-mono font-normal text-stone-950 not-italic">
          <Header />
          <ToDoList />
        </div>
      </div>
    </>
  );
}
