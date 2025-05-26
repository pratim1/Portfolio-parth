import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
      <div className="container">
         <section id="#home" >
          <Hero/>
        </section>

        <section id="#services">
          <Services/>
        </section>

        <section id="#portfolio">
           <Portfolio/>
        </section>

         <section id="#contact">
         <Contact/>
        </section>  
        
    
      
      </div>
  );
}

export default App;
