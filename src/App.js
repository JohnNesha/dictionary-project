import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">📖 Dictionary App 📖</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by JohnNesha</footer>
      </div>
    </div>
  );
}
