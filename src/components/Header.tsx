import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register } from "../api/auth";
import { useAuthContext } from "../contexts/Auth";
import { clearAuthData, handleError } from "../utils";
import { AuthResponse } from "../utils/types/auth.type";
import Button from "./Button";
import Input from "./Input";
type Props = {};

const Header = (props: Props) => {
  const context = useAuthContext();
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [submitType, setSubmitType] = useState<"login" | "register">("login");

  const handleLogout = async () => {
    clearAuthData();
    context?.setAuth(null);
  };

  const onAuthSuccess = async (response: AuthResponse) => {
    sessionStorage.setItem(
      "_at",
      JSON.stringify({ ...response, email: emailValue })
    );
    context?.setAuth(emailValue);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const authInput = { email: emailValue, password: passwordValue };
      let response: AxiosResponse<AuthResponse>;
      if (submitType === "login") {
        response = await login(authInput);
      } else {
        response = await register(authInput);
      }
      toast.success("Authentication successful");
      onAuthSuccess(response.data);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-5 border-b border-gray-300">
      <Link to={"/"} className="flex items-center gap-4">
        <svg
          width={40}
          className="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            height={40}
            d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"
          />
        </svg>
        <span className="text-2xl font-bold">Funny Movies</span>
      </Link>

      {!context?.auth ? (
        <form className="ml-auto gap-3 flex" onSubmit={handleSubmit}>
          <Input
            placeholder="email"
            required
            type="email"
            name="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <Input
            type="password"
            required
            placeholder="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
          <Button type="submit" onClick={(e) => setSubmitType("login")}>
            Login
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={(e) => setSubmitType("register")}
          >
            Register
          </Button>
        </form>
      ) : (
        <nav className="ml-auto gap-3 items-center flex">
          <h4>
            Wellcome <span className="font-medium">{context?.auth}</span>
          </h4>
          <Button onClick={(e) => navigate("share")}>Share a movie</Button>
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
