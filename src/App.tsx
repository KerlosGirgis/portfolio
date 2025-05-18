import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavBar } from "./components/navbar/navbar";
import { Banner } from "./components/banner/banner";
import { Footer } from "./components/footer/footer";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default App;
