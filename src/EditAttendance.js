import React, { useState, useRef } from "react";

const EditAttendance = ({ status, date }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();

  console.log("date-edit ", date);
  const editHandler = (event) => {
    event.stopPropagation();
    setEdit(!edit);
    console.log("input-ref ", inputRef?.current?.value);
    if (document.querySelector(".edit").innerHTML.includes("save")) {
      console.log("save satisfy");
      fetch("/updateDate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: inputRef?.current?.value,
          date: date,
        }),
      })
        .then((data) => {
          return data.json();
        })
        .then((res) => {
          console.log("res ", res);
        });
      const openElement = document.querySelector(".open");
      openElement.style.display = "none";
      openElement.classList.remove("open");
    }
  };
  return (
    <>
      <div>
        <div>Attendance Status:</div>
        {!edit && (
          <div
            style={{
              backgroundColor: status?.includes("Present")
                ? "green"
                : status?.includes("Absent")
                ? "red"
                : "blueviolet",
              borderRadius: "5px",
              color: "white",
              padding: "5px",
            }}>
            {status ? status : "Not Marked"}
          </div>
        )}
        {edit && <input placeholder={status} ref={inputRef} />}
      </div>
      <button
        onClick={editHandler}
        style={{
          width: "fit-content",
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "orange",
          color: "white",
          fontSize: "15px",
          cursor: "pointer",
        }}
        className="edit">
        {!edit ? "edit" : "save"}
      </button>
    </>
  );
};

export default EditAttendance;
