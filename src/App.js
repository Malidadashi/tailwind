import "./App.css";
import CardContent from "./Components/CardContent";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import MovingButtonsContainers from "./Components/MovingButtons/MovingButtonsContainers";
import ScrollBasedComments from "./Components/MyStory/ScrollBasedComments";
function App() {
  return (
    <div className="App">
      <Footer />
      <FAQ/>
      <ScrollBasedComments/>
      <MovingButtonsContainers/>
    </div>
  );
}

export default App;
