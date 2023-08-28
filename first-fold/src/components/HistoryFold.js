import React, { useState } from "react";
import buttons from "../data/Buttons";

const HistoryFold = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [animationClass, setAnimationClass] = useState([]);

  const handleButtonClick = (buttonId) => {
    console.log("Button clicked!");
    // add multiple classes to state
    setAnimationClass(["animate1", "animate2", "animate3"]);
    setShowCards(true);
    setSelectedButton(buttonId);
  };

  const renderCards = () => {
    if (!showCards) {
      return null;
    }

    // add animation class to cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      card.classList.add(animationClass[index]);
    });

    const selectedButtonData = buttons.find(
      (button) => button.id === selectedButton
    ).data;
    return (
      <>
        {/* add data */}
        {selectedButtonData.map((data, index) => (
          <div key={index} className="card">
            {data}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <section class="sc-gSYDnn jcqGXt sc-uxdHp fiDOnB">
        <div className="history-head">
          <div class="sc-jhGUec fNonh">
            <h1 class="sc-bdnxRM sc-hkoqWr jvCTkj jwZvNA">
              A look at our{" "}
              <span color="#FF2CFB" class="sc-gGGFjW ebFTPr">
                history
              </span>
            </h1>
          </div>
          <div class="sc-bShgHC aBwtF">
            <p class="sc-hKFxyN sc-juXuNZ kksiKu rfqUc">
              Hack the North hits double digits! In 2023, we're celebrating the
              10th Hack the North.
              <br />
              Let's look back at some highlights from past events:
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="left">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
            >
              <i class="fa-regular fa-folder-open"></i>
            </button>
          ))}
        </div>
        <div className="right card-container">{renderCards()}</div>
      </div>
    </>
  );
};

export default HistoryFold;
