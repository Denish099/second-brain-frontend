import { Button } from "./components/Button";
import { PlusComponent } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="sm"
        text="Add Content"
        onclick={() => {}}
        startIcon={<PlusComponent size="sm" />}
      />
      <br></br>
      <br></br>

      <Button
        variant="secondary"
        size="lg"
        text="Share"
        startIcon={<ShareIcon size="lg" />}
        onclick={() => {}}
      />
    </>
  );
}

export default App;
