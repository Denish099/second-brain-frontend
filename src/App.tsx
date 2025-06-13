import { Button } from "./components/Button";
import { PlusComponent } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";
import { Card } from "./components/Card";
import { CreateComponentModel } from "./components/createComponentModel";

function App() {
  return (
    <div className="p-4 space-y-6">
      <CreateComponentModel open={false} onclose={() => {}} />
      <div className="flex justify-end gap-3">
        <Button
          variant="primary"
          size="lg"
          text="Add Content"
          onclick={() => {}}
          startIcon={<PlusComponent size="lg" />}
        />

        <Button
          variant="secondary"
          size="lg"
          text="Share"
          startIcon={<ShareIcon size="lg" />}
          onclick={() => {}}
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        <div>
          <Card
            title="Twitter Post"
            link="https://x.com/kirat_tw/status/1633685473821425666"
            type="twitter"
          />
        </div>

        <div>
          <Card
            title="YouTube Video"
            link="https://www.youtube.com/watch?v=fRE9WVZcU7I"
            type="youtube"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
