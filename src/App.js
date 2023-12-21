import "./App.css";
import Calendar from "./Calendar";
function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "24px",
          color: "orange",
          fontWeight: "600",
        }}>
        Calendar
      </div>
      <div className="App">
        <Calendar />
      </div>
    </>
  );
}

export default App;
