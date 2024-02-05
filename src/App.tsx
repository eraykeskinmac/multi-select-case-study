import "./App.css"; // Varsayılan stil dosyanızı buraya ekleyin.
import MultiSelect from "./components/MultiSelect";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <MultiSelect />
      </main>
    </div>
  );
};

export default App;
