import { useState } from "react"; // Import useEffect
import cn from "classnames";
import { ReplyFill as Icon } from "react-bootstrap-icons";
import frassino from './frassino.png'


// Use the imported images
function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    console.log("click");
    setShowBack(true); // Show the back of the card
    console.log(card);

    // Flip the card back after 5 seconds
    setTimeout(() => {
      setShowBack(false);
    }, 5000);
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

  function handleMouseEnter() {
    if (card.variant === "hover") {
      setShowBack(true);
    }
  }

  function handleMouseLeave() {
    if (card.variant === "hover") {
      setShowBack(false);
    }
  }

  return (
    <div
      tabIndex={card.id}
      className={cn("flip-card-outer", { hover: card.variant === "hover" })}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter} // Add this line
      onMouseLeave={handleMouseLeave} // Add this line
    >
      <div className={cn("flip-card-inner", { showBack })}>
        <div
          className="card front"
          style={{
            backgroundImage: `url(${card.front.image})`,
            backgroundPosition: "center", // center the image
            backgroundSize: "cover", // crop the image to fill the element
            backgroundRepeat: "no-repeat", // prevent the image from repeating
            width: "100%", // make the front card fill the outer div
            height: "100%", // make the front card fill the outer div
            backgroundColor: "#f6f5f3", // add this line
            scale: "1.2",
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
            backgroundImage: `url(${card.back.image})`,
            backgroundPosition: "center", // center the image
            backgroundSize: "cover", // crop the image to fill the element
            backgroundRepeat: "no-repeat", // prevent the image from repeating
            width: "100%", // make the front card fill the outer div
            height: "100%", // make the front card fill the outer div
            scale: "1.2",

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
