import { Input } from "../components/inputs";
import { Button } from "../components/Button";
import { Logo } from "../icons/logo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { mutate: signupMutation } = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      const res = await axiosInstance.post("auth/login", data);
      console.log(res.data);
      return res.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/");
    },
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded border-gray-200 min-w-48 p-7">
        <div className="flex text-2xl p-2  gap-2 justify-center">
          <Logo size="2lg" />
          Brainly
        </div>
        <Input placeholder="username" ref={usernameRef} />
        <Input placeholder="password" ref={passwordRef} />
        <div className="flex items-center justify-center pt-4">
          <Button
            text="Login"
            variant="primary"
            size="lg"
            onclick={() => {
              const username = usernameRef.current?.value;
              const password = passwordRef.current?.value;
              console.log(username);
              console.log(password);
              if (!username || !password) {
                return;
              }
              signupMutation({ username, password });
            }}
          />
        </div>
      </div>
    </div>
  );
}
