import "./App.css";
import About from "./components/About/About";
import CardList from "./components/CardList";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App  min-h-screen">
      <Intro gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      <About gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      <div className="md:mx-[100px] mx-[20px] ">
        <h1 className="text-5xl font-bold mb-[100px]">Projects</h1>
        <div className="flex flex-col justify-center items-center">
          <CardList />
        </div>
      </div>
      <div className="h-[640px]">
        {/* <h1>Hai</h1> */}
        <Contact gradientStart="#FF8FB1" gradientEnd="#7A4495" />
      </div>
    </div>
  );
}

export default App;
