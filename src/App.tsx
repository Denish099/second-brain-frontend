import { Button } from "./components/Button";
import { PlusComponent } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";
import { Card } from "./components/Card";
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
      <Card
        title="hello"
        link="https://twitter.com/username/status/807811447862468608"
        type="twitter"
      />
      <Card
        title="youtube"
        link="https://www.youtube.com/embed/fRE9WVZcU7I?si=A_CgvJ1m8hvPIK05"
        type="youtube"
      />
    </>
  );
}

export default App;
