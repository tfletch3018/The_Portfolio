// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Particles from "./components/layouts/Particles";
// import Header from "./components/section/Header";
// import About from "./components/section/About";
// import Works from "./components/section/Works";
// import Contact from "./components/section/Contact";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { animation } from "./profile";
// import Projects from "./pages/Projects";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: animation.duration,
//       once: animation.once,
//       disable: !animation.animate,
//     });
//     // eslint-disable-next-line
//   }, []);

//   return (

//     <Router>
//     <div className="App">
//       <Header />
//       <Particles />
//       <About />
//       <Works />
//       <Contact />

//       <Route exact path="/" commponent={Works} />
//       <Route exact path="/home" component={Works} />
//       <Route exact path="/projects" component={Projects} />
//     </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WholeApp from "./WholeApp";
import Works from "./components/section/Works";
import Projects from "./pages/Projects";

function App() {
  return (

    <Router>
      <div className="App">

        <WholeApp />

        <Route exact path="/" commponent={Works} />
        <Route exact path="/home" component={Works} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router >
  );
}

export default App;