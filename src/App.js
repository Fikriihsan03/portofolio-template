import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App  min-h-screen">
      <Intro gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      <About gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      <Projects gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      <div className="h-[640px]">
        <Contact gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      </div>
    </div>
  );
}

export default App;
