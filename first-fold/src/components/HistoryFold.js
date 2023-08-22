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
              <div class="sc-ganJan opCYB">
                <svg
                  width="88"
                  height="71"
                  viewBox="0 0 88 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-cssPrJ cgujhP"
                >
                  <path
                    d="M0.5 70.5V13.11L5.53 2.5H30.7L35.92 13.5H85.5V70.5H0.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M30.39 3L35.34 13.43L35.61 14H85V70H1V13.22L5.84 3H30.39ZM31.02 2H5.21L0 13V71H86V13H36.24L31.02 2Z"
                    fill="white"
                  ></path>
                  <path
                    class="folder"
                    d="M2.5 68.5V11.11L7.53 0.5H32.7L37.92 11.5H87.5V68.5H2.5Z"
                    fill="url(#0closed2020)"
                  ></path>
                  <path
                    d="M32.39 1L37.34 11.43L37.61 12H87V68H3V11.22L7.84 1H32.38M33.01 0H7.21L2 11V69H88V11H38.24L33.02 0H33.01Z"
                    fill="white"
                  ></path>
                  <path
                    class="folder"
                    d="M87.5 16.5H2.5V68.5H87.5V16.5Z"
                    fill="url(#1closed2020)"
                  ></path>
                  <path
                    d="M87 17V68H3V17H87ZM88 16H2V69H88V16Z"
                    fill="white"
                  ></path>
                  <defs>
                    <linearGradient
                      id="0closed2020"
                      x1="45"
                      y1="0.5"
                      x2="45"
                      y2="68.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#141425"></stop>
                      <stop offset="1" stop-color="#141425"></stop>
                    </linearGradient>
                    <linearGradient
                      id="1closed2020"
                      x1="45"
                      y1="16.5"
                      x2="45"
                      y2="68.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#141425"></stop>
                      <stop offset="1" stop-color="#141425"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <p class="sc-jSFjdj sc-jTFZWL jcTaHb edNdfq">2020</p>
              </div>
            </button>
          ))}
        </div>
        <div className="right card-container">{renderCards()}</div>
      </div>
    </>
  );
};

export default HistoryFold;
