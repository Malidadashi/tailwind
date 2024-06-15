import React, { useEffect, useState } from "react";
import "./mystory.css"; // Import your CSS for styling

const ScrollBasedComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Simulated comments data (you can fetch from API or pass as props)
    const initialComments = [
      "Start of my journey goes back to days when I got familier with ",
      "wordpress and web field . Feeling of creating was",
      "always a great inspiration for me and the main reason ",
      "I started to be a creator in this field . I",
      "ve faced a lot of",
      "challanges for leveling up my skills and ",
      "I would like to help businesses ",
      "have better websites to grow in their career.",
    ];
    setComments(initialComments);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const commentsElements = document.querySelectorAll(".comment");

      commentsElements.forEach((comment) => {
        const rect = comment.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          comment.classList.add("exposed");
        } else {
          comment.classList.remove("exposed");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-based-comments">
      <h2>Scroll-Based Comments</h2>
      <div className="comments">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBasedComments;
