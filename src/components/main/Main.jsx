import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className=" main-container">
      <div>
        <img className="img" src={assets.user_icon} alt="" />
      </div>
      <div className="container2">
        <nav className="nav">Alum AI</nav>
        <div className="greet-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p className="name-text">Hello,Dev</p>
                <p className="question-text">How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p className="card-content">
                    Find hotels for a New Year's Trip to San Franscisco
                  </p>
                  <img className="card-img" src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p className="card-content">
                    Briefly summarize this concept of urbanisation
                  </p>
                  <img className="card-img" src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p className="card-content">
                    Brainstorm team bonding activities for our work retreat
                  </p>
                  <img className="card-img" src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p className="card-content">
                    Improve the readability of following
                  </p>
                  <img className="card-img" src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr className="loader-hr" />
                    <hr className="loader-hr" />
                    <hr className="loader-hr" />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="input-container">
          <div className="search-container">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a New Prompt"
              />
              <div>
                <img className="search-img" src={assets.gallery_icon} alt="" />
                <img className="search-img" src={assets.mic_icon} alt="" />
                <img
                  onClick={() => onSent()}
                  className="search-img"
                  src={assets.send_icon}
                  alt=""
                />
              </div>
            </div>
            <p className="bottom-text">
              Alum AI does not always give correct information.Please
              double-check it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
