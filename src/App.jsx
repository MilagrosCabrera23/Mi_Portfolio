import { useState, useEffect } from "react";
import LoadingComponent from "./components/Loading/Loading";
import NavbarComponent from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/Home";
import AboutMeComponent from "./components/About Me/AboutMe";
import ProjectsComponent from "./components/Projects/Projects";
import ContactComponent from "./components/Contact/Contact";
import FooterComponent from "./components/Footer/Footer";
import BackgroundComponent from "./components/Background/Background";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica si hay una preferencia guardada en el localStorage
    const guardarModo = localStorage.getItem("dark-mode") == true;
    setDarkMode(guardarModo);

    if (guardarModo) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado de carga a false después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  
  const toggleDarkMode = () => {
    setDarkMode((modoPrevio) => {
      const nuevoModo = !modoPrevio;
      localStorage.setItem("dark-mode", nuevoModo);

      if (nuevoModo) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      return nuevoModo; 
    });
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <NavbarComponent  toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <BackgroundComponent/>
          <HomeComponent />
          <AboutMeComponent />
          <ProjectsComponent />
          <ContactComponent />
          <FooterComponent />
        </>
      )}
    </>
  );
}

export default App;
