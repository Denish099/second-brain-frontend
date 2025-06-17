import { Input } from "../components/inputs";
import { Button } from "../components/Button";
import { Logo } from "../icons/logo";
export function SignUp() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded border-gray-200 min-w-48 p-7">
        <div className="flex text-2xl p-2  gap-2 justify-center">
          <Logo size="2lg" />
          Brainly
        </div>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <div className="flex items-center justify-center pt-4">
          <Button
            text="Sign up"
            variant="secondary"
            size="lg"
            onclick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
