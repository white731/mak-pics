import './App.css';
import BeforeAfterSlider from 'react-before-after-slider'

function App() {

  const before = "https://mcusercontent.com/b61bde706ca219f6690032ed4/images/848758dc-2ed4-3968-6a3a-4e5cc1533398.png"
  const after = "https://mcusercontent.com/b61bde706ca219f6690032ed4/images/84ae4074-1c37-d885-7500-032519831dfa.png"


  return (
  <>
    <div className="App">
      <h1>Makenzies Cool Pics</h1>
    </div>

    <div style={{display:"flex", justifyContent: "center"}}>
      <BeforeAfterSlider
        before={before}
        after = {after}
        width={640}
        height={480}
      />
    </div>
  </>
  );
}

export default App;
