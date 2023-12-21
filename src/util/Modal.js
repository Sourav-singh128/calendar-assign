import React, { useEffect } from "react";
import "./modal.css";
import EditAttendance from "../EditAttendance";
const Modal = ({ open, setOpen, date, dateInfo }) => {
  console.log("component runs");
  //   const dbDate = { date: "12-21-2023", presentStatus: "Present" };
  useEffect(() => {
    console.log("useEffect runs");
    // fetch current date from db;
  }, []);
  return (
    <>
      <div
        className={open ? "modal-container open" : "modal-container"}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <button
          onClick={(event) => {
            setOpen(false);
            event.stopPropagation();
          }}
          style={{
            width: "fit-content",
            padding: "5px 15px",
            cursor: "pointer",
          }}>
          X
        </button>
        <div>
          <div>Date:</div>
          <div>{dateInfo.date}</div>
        </div>
        <EditAttendance status={dateInfo.attendance} date={date} />
      </div>
    </>
  );
};

export default Modal;
