import "./App.css";
import { Button, Text } from "./ui";

function App() {
  return (
    <>
      <Text>sprawdzam</Text>
      <Button label="Click me" onClick={() => alert("Sprawdzam")}/>
    </>
  );
}

export default App;
