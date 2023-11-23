import "./App.css";
import Routes from "./Routes";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
function App() {
  return (
    <div style={{ margin: "0px" }}>
      <div style={{ position: "fixed", top: "0px", left: "0px", zIndex: "1" }}>
        <NavBar />
      </div>
      <div style={{ marginTop: "60px", display: "flex" }}>
        <div
          class="sidebar"
          style={{ width: "200px", position: "fixed", overflow: "hidden" }}
        >
          <div>
            <SideBar />
          </div>
        </div>
        <div
          class="content"
          style={{
            position: "fixed",
            top: "60px",
            left: "200px",
            width: "calc(100vw - 210px)",
            height: "calc(100vh - 60px)",
            overflowY: "auto",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ height: "100%" }}>{Routes}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
