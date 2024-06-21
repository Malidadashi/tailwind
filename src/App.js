import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import JobsContainers from "./Components/Jobs/JobsContainers";
import MovingButtons from "./Components/MovingButtons/MovingButtons";
import ScrollBasedComments from "./Components/MyStory/ScrollBasedComments";
import Navbar from "./Components/Navbar/Navbar";
import OfflineNotification from "./Components/OffLine/OfflineNotification";
import SwiperLays from "./Components/Projects/SwiperLays";
import ButtonBoxComponent from "./Components/Services/ButtonBoxComponent";




function App() {
  return (
    <div className="App">
      <Navbar />

      <FAQ />
      <ScrollBasedComments />
      {/* <MovingButtons /> */}
      <JobsContainers />
      <OfflineNotification />
      {/* <SwiperLays /> */}

      <AboutMe />
      <ButtonBoxComponent />

      <Footer />
    </div>
  );
}

export default App;
