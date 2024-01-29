import Map from "./Component/Map"

import './App.css';
import SimpleMap from "./Component/SimpleMap";

function App() {
  return (
    <div style={{  textAlign: "center" }} >
      <h1>GOMYCODE </h1>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"  }}>
      <Map />
      {/* <SimpleMap/> */}
      
      </div>
    </div>
  );
}

export default App;
