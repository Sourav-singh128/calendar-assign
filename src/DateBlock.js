import React, { useState, useEffect } from "react";
import "./dateBlock.css";
import Modal from "./util/Modal";
const DateBlock = ({ date }) => {
  const [open, setOpen] = useState(false);
  const [dateInfo, setDateInfo] = useState({});
  useEffect(() => {
    window.onclick = () => {
      const openElement = document.querySelector(".open");
      if (openElement) {
        openElement.style.display = "none";
        openElement.classList.remove("open");
      }
    };
  });
  const openHandler = (event) => {
    console.log("date-block-clicked");
    // console.log("target ", event.target);
    // console.log("current-target ", event.currentTarget);

    fetch("/findDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dateValue: date,
      }),
    })
      .then((data) => {
        console.log("data ", data);
        return data.json();
      })
      .then((res) => {
        console.log("res ", res);
        setDateInfo(res);
      })
      .catch((err) => {
        console.log("err ", err);
      });

    const openElement = document.querySelector(".open");
    console.log("open ", openElement);
    if (openElement) {
      openElement.style.display = "none";
      openElement.classList.remove("open");
    }

    const currentEle = event.target.querySelector(".modal-container");
    console.log("current ", currentEle);
    if (currentEle) {
      currentEle.style.display = "flex";
      currentEle.classList.add("open");
    }
    setOpen(true);
    event.stopPropagation();
  };
  return (
    <>
      <div
        className="date-block"
        onClick={openHandler}
        style={{ pointerEvents: !date ? "none" : null }}>
        {date}
        {open && (
          <Modal
            open={open}
            setOpen={setOpen}
            date={date}
            dateInfo={dateInfo}
          />
        )}
      </div>
    </>
  );
};

export default DateBlock;
