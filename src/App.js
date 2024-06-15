import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import MovingButtons from "./Components/MovingButtons/MovingButtons";
import ScrollBasedComments from "./Components/MyStory/ScrollBasedComments";
function App() {
  return (
    <div className="App">
      <Footer />
      <FAQ />
      <ScrollBasedComments />
      <MovingButtons />
    </div>
  );
}

export default App;
