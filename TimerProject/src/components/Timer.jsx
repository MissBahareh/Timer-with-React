import { useState, useEffect } from "react";
import styleDiv from "../timerStyle.module.css";

function MyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [clock, setClock] = useState(0);
  const [isFlexImg, setIsFlexImg] = useState(true);
  const [isFlex, setIsFlex] = useState(false);
  const [isFlexForm, setIsFlexForm] = useState(false);
  const [isFlexAbout, setIsFlexAbout] = useState(false);

  function handleSelectChange(event) {
    const valueOption = event.target.value;
    if (valueOption === "Choose") {
      setIsFlex(false);
      setIsFlexImg(true);
      setIsFlexForm(false);
      setIsFlexAbout(false);
    }
    if (valueOption === "System clock") {
      setIsFlex(true);
      setIsFlexImg(false);
      setIsFlexForm(false);
      setIsFlexAbout(false);
    }
    if (valueOption === "Send Score") {
      setIsFlex(false);
      setIsFlexImg(false);
      setIsFlexAbout(false);
      setIsFlexForm(true);
    }
    if (valueOption === "About me") {
      setIsFlex(false);
      setIsFlexImg(false);
      setIsFlexForm(false);
      setIsFlexAbout(true);
    }
  }
  useEffect(() => {
    const Sec = setInterval(() => {
      setSeconds((prevsseconds) => (prevsseconds + 1) % 59);
    }, 1000);
    const Min = setInterval(() => {
      setMinute((prevsminute) => (prevsminute + 1) % 59);
    }, 59000);
    const Clck = setInterval(() => {
      setClock((prevsclock) => (prevsclock + 1) % 23);
    }, 3540000);

    return () => {
      clearInterval(Sec);
      clearInterval(Min);
      clearInterval(Clck);
    };
  }, []);

  return (
    <>
      <h1 className={styleDiv.header}>Building a Timer with React</h1>
      <div className={styleDiv.myDiv}>
        <span className={styleDiv.titelOfDiv}>The Time You Spent Here</span>
        <p className={styleDiv.myPinterDiv}>
          {String(clock).padStart(2, "0")}:{String(minute).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
      </div>
      <div className={styleDiv.selectSide}>
        <label className={styleDiv.selectLabel} htmlFor={"optional"}>
          Select your option to display information
        </label>

        <select
          className={styleDiv.select}
          id="optional"
          onChange={handleSelectChange}
        >
          <option value="Choose">Choose</option>
          <option className="clock" value="System clock">
            System Clock
          </option>
          <option value="About me">About me</option>
          <option value="Send Score">Send Score</option>
        </select>
      </div>
      <div className={styleDiv.dataBox}>
        <img
          src="../src/assets/gif.gif"
          alt=""
          style={{ display: isFlexImg ? "flex" : "none" }}
        />
        <div className={styleDiv.sClock}>
          <Sclock isFlex={isFlex} />
        </div>
        <div className={styleDiv.sMessage}>
          <SMessage isFlexForm={isFlexForm} />
        </div>
        <div className={styleDiv.SAbout}>
          <SAbout isFlexAbout={isFlexAbout} />
        </div>
      </div>
    </>
  );
}

function Sclock({ isFlex }) {
  const [sysClock, setSysClock] = useState(new Date());
  useEffect(() => {
    const clockSys = () => {
      setSysClock(new Date());
    };
    const clockPage = setInterval(clockSys, 1000);
    return () => {
      clearInterval(clockPage);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        justifyContent: "center",
        alignItems: "center",
        display: isFlex ? "flex" : "none",
      }}
    >
      <p
        className="pTimer"
        style={{
          fontSize: "100px",
          color: "white",
        }}
      >
        {String(sysClock.getHours()).padStart(2, "0")}:
        {String(sysClock.getMinutes()).padStart(2, "0")}:
        {String(sysClock.getSeconds()).padStart(2, "0")}
      </p>
    </div>
  );
}
function SMessage({ isFlexForm }) {
  return (
    <>
      <form
        style={{
          width: "100%",
          height: "50vh",
          display: isFlexForm ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className={styleDiv.h2Smessage}>Express your opinion by rating</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "30px 0",
          }}
        >
          <div className={styleDiv.points}>
            <label htmlFor="great">Great</label>
            <input
              type="radio"
              id="great"
              name="fav_language"
              value="great"
            ></input>
          </div>
          <div className={styleDiv.points}>
            <label htmlFor="good">Good</label>
            <input
              type="radio"
              id="good"
              name="fav_language"
              value="great"
            ></input>
          </div>
          <div className={styleDiv.points}>
            <label htmlFor="bad">Bad</label>
            <input
              type="radio"
              id="bad"
              name="fav_language"
              value="great"
            ></input>
          </div>
        </div>
        <input className={styleDiv.submit} type="submit" value={"send"} />
      </form>
    </>
  );
}
function SAbout({ isFlexAbout }) {
  return (
    <>
      <div
        className={styleDiv.SAboutDiv}
        style={{ display: isFlexAbout ? "flex" : "none" }}
      >
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          expedita voluptatem perferendis a eaque at natus sequi dolores dolore
          debitis sint omnis ex iure distinctio, dicta repellendus, sapiente ab
          dolorum.
        </p>
      </div>
    </>
  );
}

export default MyTimer;
