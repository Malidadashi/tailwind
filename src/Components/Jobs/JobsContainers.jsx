import React from 'react';
import JobsItems from './JobsItems';
import './JobsItems.css';
import './JobsContainers.css'
import { CiSearch } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import development from '../../assets/development.jpg'

const JobsContainers = () => {
  const boxes = [
    { icon: <CiSearch />, title: 'Box 1', text: 'This is the fasdirst box.', imageSrc: development  },
    { icon: <BsCalendar2Date />, title: 'Box 2', text: 'This is the second box.'},
    { icon: <IoCodeSlashOutline />, title: 'Box 3', text: 'This is the third box.' },
    { icon: <BsStars />, title: 'Box 4', text: 'This is the fourth box.' },
  ];

  return (
    <div className="Job-container">
      {boxes.map((box, index) => (
        <JobsItems key={index} icon={box.icon} title={box.title} text={box.text} imageSrc={box.imageSrc} />
      ))}
    </div>
  );
};

export default JobsContainers;
