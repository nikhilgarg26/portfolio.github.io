import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Works from "./components/works/Works";
import "./App.scss"
import {useState} from 'react'


function App() {
  const [menu, setmenu] = useState(false);
  return (
    <div className="app">
      <Topbar menu={menu} setmenu={setmenu}/>
      <Sidebar menu={menu} setmenu={setmenu}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works></Works>
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
