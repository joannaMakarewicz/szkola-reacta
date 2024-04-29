import "./App.css";
import { Button, Text } from "./ui";

const textContent = "Suchar dnia!";

const jokes = [
  {
    id: 1,
    label: "Poniedziałek",
    jokeText: "Co mówi ogrodnik do ogrodnika? Przesadziłeś.",
    className: "bg-red-800 border-red-600 hover:bg-red-700",
  },
  {
    id: 2,
    label: "Wtorek",
    jokeText: "Jak się wita mleko? Mlekovita.",
    className: "bg-green-800 border-green-600 hover:bg-green-700",
  },
  {
    id: 3,
    label: "Środa",
    jokeText: "Jak jest mur po francusku? Lemur.",
    className: "bg-blue-800 border-blue-600 hover:bg-blue-700",
  },
];

function App() {
  return (
    <main className="bg-teal-700 p-6 min-h-96 flex-col justify-center content-center">
      <Text className="text-slate-50 uppercase text-center">{textContent}</Text>
      <>
        {jokes.map((joke, key) => {
          return (
            <Button
              key={joke.id}
              label={joke.label}
              onClick={() => alert(joke.jokeText)}
              className={joke.className}
            />
          );
        })}
      </>
    </main>
  );
}

export default App;
