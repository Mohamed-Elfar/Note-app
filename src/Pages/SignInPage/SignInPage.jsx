import { useState } from "react";
import { login } from "./../../services/apiAuth";
import { Link, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function SubmitFun(e) {
    e.preventDefault();
    setAccept(true);
    setErrorMessage("");

    const isValid = password.length >= 8;
    if (!isValid) return;

    try {
      const res = await login({ name, email, password });
      console.log("SignIn successful", res);
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);

      navigate("/DisplayNote", { state: { userId: res.user.id } });
    } catch (err) {
      console.error("SignIn error", err);
      setErrorMessage("Incorrect email or password");
    }
  }

  return (
    <>
      <div className="w-[80%] h-[50%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="h-[150px] w-[150px] absolute rounded-full bg-gradient-to-br from-[#1845ad] to-[#23a2f6] -left-[60px] -top-[60px]"></div>
        <div className="h-[150px] w-[150px] absolute rounded-full bg-gradient-to-r from-[#ff512f] to-[#f09819] -right-[20px] -bottom-[60px]"></div>
      </div>
      <form
        className="w-[90%] max-w-[400px] bg-white/15 absolute top-1/2 left-1/2 rounded-[10px] -translate-x-1/2 -translate-y-1/2 backdrop-blur shadow-[0_0_40px_rgba(8,7,16,0.282)] border border-white/10"
        style={{ padding: "20px 15px" }}
        onSubmit={SubmitFun}
      >
        <svg
          style={{ margin: "auto" }}
          className="logo"
          width="96"
          height="96"
          viewBox="0 0 176 176"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <circle cx="88" cy="88" r="88" fill="transparent"></circle>
            <path
              d="M152.37 87.885c0-34.066-27.182-63.42-59.45-64.854-6.416-.284-12.647 1.432-17.58 5.573-5.002 4.196-8.07 10.09-8.638 16.595C65.43 59.73 78.537 68.618 91.225 72.09c30.69 8.398 48.462 30.086 46.655 56.757 9.057-11.194 14.49-25.442 14.49-40.962zM84.345 97.24c-28.696-7.853-45.817-29.174-43.62-54.317.027-.287.073-.567.102-.852C29.19 53.846 22 70.023 22 87.886c0 34.348 27.955 63.828 60.277 64.933 7.227.248 14.214-1.685 19.766-6.344 5.67-4.757 9.146-11.435 9.79-18.808 1.703-19.463-16.492-27.417-27.488-30.426z"
              fill="#3361cc"
            ></path>
          </g>
        </svg>

        <label
          htmlFor="username"
          className="block text-[20px] font-medium"
          style={{ marginTop: "15px" }}
        >
          Username
        </label>
        <input
          type="text"
          placeholder="UserName"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-[#E8F0FE] block h-[40px] w-[100%] rounded-[3px] text-[14px] font-light "
          style={{ padding: "0px 10px" }}
        />
        <label
          htmlFor="email"
          className="block text-[20px] font-medium"
          style={{ marginTop: "15px" }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#E8F0FE] block h-[40px] w-[100%] rounded-[3px] text-[14px] font-light "
          style={{ padding: "0px 10px" }}
        />

        <label
          htmlFor="password"
          className="block text-[20px] font-medium"
          style={{ marginTop: "15px" }}
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#E8F0FE] block h-[40px] w-[100%] rounded-[3px] text-[14px] font-light "
          style={{ padding: "0px 10px" }}
        />
        {password.length < 8 && accept && (
          <p style={{ fontSize: "15px", color: "red", marginLeft: "4px" }}>
            Password must be more than 8 char
          </p>
        )}
        {errorMessage && (
          <p style={{ color: "red", marginLeft: "4px" }}>{errorMessage}</p>
        )}
        <button
          className="w-[100%] mt-[20px] bg-[#3361cc] text-[16px] font-semibold rounded-[5px] cursor-pointer"
          style={{
            color: "white",
            marginTop: "20px",
            padding: "12px 0",
          }}
          type="submit"
        >
          Log In
        </button>
        <div className="flex justify-between" style={{ marginTop: "12px" }}>
          <p>Don't have an Account</p>
          <Link
            to="/SignUp"
            style={{
              color: "#3361cc",
            }}
          >
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
}
