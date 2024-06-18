import "./App.css";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import JobsContainers from "./Components/Jobs/JobsContainers";
import MovingButtons from "./Components/MovingButtons/MovingButtons";
import ScrollBasedComments from "./Components/MyStory/ScrollBasedComments";
import OfflineNotification from "./Components/OffLine/OfflineNotification";
import SwiperLays from "./Components/Projects/SwiperLays";
import Services from "./Components/Services/Services";




function App() {
  return (
    <div className="App">
      <Footer />
      <FAQ />
      <ScrollBasedComments />
      {/* <MovingButtons /> */}
      <JobsContainers/>
      <OfflineNotification/>
      <SwiperLays/>
      <Services/>
    </div>
  );
}

export default App;
