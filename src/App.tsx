import "./App.css";
import { Button, Text } from "./ui";

const textContent = "Suchar dnia!";

const jokes = [
  { id:1, label: "Poniedziałek", jokeText: "Zart 1" },
  { id:2, label: "Wtorek", jokeText: "Zart 2" },
  { id:3, label: "Środa", jokeText: "Zart 3" },
];

function App() {
  return (
    <>
      <Text>{textContent}</Text>
      <>
        {jokes.map((joke, key) => {
          return <Button key={joke.id} label={joke.label} onClick={() => alert(joke.jokeText)} />;
        })}
      </>
    </>
  );
}

export default App;
