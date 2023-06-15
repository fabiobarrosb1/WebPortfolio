import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';
import Projects from './components/Projects/Projects';
import { AppProvider } from './components/AppComponents/AppComponents';
import FadeIn from './components/FadeIn/FadeIn';


function App() {

  return (
    <div className="App">
      <AppProvider>
      <FadeIn>
          <Home />
          <Projects />
          <Contact />
          <Footer />
          </FadeIn>
      </AppProvider>
    </div>
  );
}

export default App;
