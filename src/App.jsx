import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUpPage/SignUp";
import SignInPage from "./Pages/SignInPage/SignInPage";
import HomePage from "./Pages/HomePage/Home";
import AboutUsPage from "./Pages/AboutPage/AboutUs";
import Home from "./Pages/HomePage/Home";
import DisplayNote from "./Pages/CRUD Page/DisplayNote/displayNote";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/DisplayNote" element={<DisplayNote />} />
      </Routes>
    </>
  );
}

export default App;
