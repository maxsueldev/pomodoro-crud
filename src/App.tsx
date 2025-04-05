import Pomodoro from "./components/Pomodoro";
import Tasks from "./components/Tasks";
import FormAddTask from "./components/FormAddTask";

function App() {
  return (
    <main className="app">
      <Pomodoro />
      <Tasks />
      <FormAddTask />
    </main>
  );
}

export default App;
