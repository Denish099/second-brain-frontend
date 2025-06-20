import { Route, Routes } from "react-router-dom";
import axiosInstance from "./lib/axios";
import { Dashboard } from "./pages/dashboard";
import { SignUp } from "./pages/signup";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { Login } from "./pages/signin";
import { SharePage } from "./pages/sharePage";

function App() {
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Dashboard /> : <SignUp />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/share/:shareId" element={<SharePage />} />
      </Routes>
    </div>
  );
}

export default App;
