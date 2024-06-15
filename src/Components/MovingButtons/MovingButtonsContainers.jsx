import MovingButtonsItems from "./MovingButtonsItems";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";




const App = () => {
  const boxes = [
    { icon: <FaCss3Alt size={32}/>, text: 'css' },
  ];

  return (
    <div className="box-container">
      {boxes.map((box, index) => (
        <MovingButtonsItems  key={index} icon={box.icon} text={box.text} />
      ))}
    </div>
  );
};

export default App;