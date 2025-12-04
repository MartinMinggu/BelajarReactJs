import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

const timmers = [
  {
    title: "Easy",
    targetTime: 1
  },
  {
    title: "Not Easy",
    targetTime: 5
  },
  {
    title: "Getting Tought",
    targetTime: 10
  },
  {
    title: "Pros Only",
    targetTime: 15
  },
]
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {
          timmers.map((element, index) => {
            return <TimerChallenge key={index} targetTime={element.targetTime} title={element.title} />
          })
          // 
        }
      </div>
    </>
  );
}

export default App;
