//import Test from "./Test.jsx";
import "./app.scss";
import Hero from "./components/hero/Hero.jsx";
// eslint-disable-next-line no-unused-vars 
import Navbar from "./components/navbar/Navbar.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
// import Services from "./components/services/Services.jsx";

const App = () => {
   return (
   <div>
      <Cursor/>
      <section id="Homepage">
         <Navbar />
         <Hero />
      </section>
    
      <section id="Portfolio">
         <Parallax type="portfolio" />
         </section>
      <Portfolio />
      <section id="Contact">
         <Contact/>
      </section>
      
     
   </div>
   );
};

export default App;