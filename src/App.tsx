import "./App.css";
import { Button } from "./components/Button";
import { PlusComponent } from "./icons/plusIcon";

function App() {
  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        text="Add Content"
        onclick={() => {}}
        startIcon={<PlusComponent size="lg" />}
      />
      <br></br>
      <br></br>

      <Button
        variant="primary"
        size="lg"
        text="Add Content"
        onclick={() => {}}
      />
    </>
  );
}

export default App;
