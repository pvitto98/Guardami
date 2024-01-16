import { useState, useEffect } from "react"; // Import useEffect
import cn from "classnames";
import { ReplyFill as Icon } from "react-bootstrap-icons";

// Use the imported images
import image2 from "./2.png";
import logo from "./logo.png";

function FlipCard({ card }) {
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
      if (showBack) {
        const timer = setTimeout(() => {
          setShowBack(false);
        }, 3000); // 5000 milliseconds = 5 seconds
  
        return () => clearTimeout(timer); // Clean up the timer
      }
    }, [showBack]);
  
    function handleClick() {
      console.log("click");
      setShowBack(true); // Show the back of the card
    }

    function handleFocus() { 
        if (card.variant === "focus") { 
          setShowBack(true); 
        } 
      } 
    
      function handleBlur() { 
        if (card.variant === "focus") { 
          setShowBack(false); 
        } 
      } 

  return (
    <div
      tabIndex={card.id} 
      className={cn("flip-card-outer", { 
        "focus-trigger": card.variant === "focus" 
      })} 
      onClick={handleClick}
      onFocus={handleFocus} 
      onBlur={handleBlur} 
    >
      <div className={cn("flip-card-inner", { showBack })}>
        <div
          className="card front"
          style={{
            backgroundImage: `linear-gradient(#00000000, #00000050), url(${image2})`,
            backgroundPosition: "center", // center the image
            backgroundSize: "100% 100%", // stretch the image to fill the element
            width: "100%", // make the front card fill the outer div
            height: "100%", // make the front card fill the outer div
          }}
        >
          <div className="card-body position-relative d-flex justify-content-center align-items-center">
            <div className="icon">
              <Icon size={15} />
            </div>
          </div>
        </div>
        <div
          className="card back"
          style={{
            backgroundImage: `linear-gradient(#00000000, #00000050), url(${image2})`,
            backgroundPosition: "center", // center the image
            backgroundSize: "100% 100%", // stretch the image to fill the element
            width: "100%", // make the front card fill the outer div
            height: "100%", // make the front card fill the outer div
          }}
        >
          <div className="card-body d-flex flex-column justify-content-around align-items-center position-relative">
            <div
              className="icon"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
              }}
            >
              <Icon size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
