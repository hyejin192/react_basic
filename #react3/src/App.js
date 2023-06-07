import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Children from "./components/Children";

function App() {
  const name = "주혜진";
  const footProps = {
    name:"주혜진",
    location:"서울"

  }
  function handleClick (){
    console.log("함수형함수 실행")
  };
  const arrowClick = () => {
    console.log("화살표함수 실행")
  };
  return (
  <div>
    <Header name={name}/>
    <Body name={name} location = "부산시"/>
    <Footer {...footProps}/>
    <Children>
      <div>children 컴퍼넌트</div>
    </Children>
    <button onClick={handleClick}>Function Click!</button>
    <button onClick={arrowClick}>Arrow Click!</button>
    
  </div>
  
  );
};

export default App;
