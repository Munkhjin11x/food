"use client";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { Stack, Typography } from "@mui/material";
import { setCookie } from "nookies";
import jwt from "jsonwebtoken";

const LoginModal = ({ onClick }: any) => {
  const apiUrl = "http://localhost:8000/users/user";
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, {
        email,
        password,
      });
      const { data } = response;
      const token = data.token;
      const code = jwt.decode(token);
      console.log(code);
      if (token) {
        setCookie(null, "token", token, {
          maxAge: 3600,
        });
        if (code.payload.role === "admin") {
          router.push("/adminDashboard");
        } else {
          router.push(`/?email${code.payload.email}`);
          onClick(false)
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error: any) {
      console.error("Error during login:", error.message);
      setError("Email or password invalid");
    }
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Stack className="bg-black bg-opacity-70 w-full h-full fixed top-0  z-10 flex justify-center items-center">
      <div className="flex flex-col p-5  mt-[111px] items-center w-[400px] bg-white   ">
        <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "24px" }}>
          Нэвтрэх
        </Typography>
        <div className="mt-12">
          <p className="text-[14px] font-normal">Имэйл </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Имэйл хаягаа оруулна уу"
            className="px-4 w-[352px] h-12 border rounded-sm bg-[#F7F7F8] text-[#8B8E95] "
          />
        </div>
        <div>
          <p className="text-[14px] font-normal">Нууц үг</p>
          <FormControl
            className="w-[352px] bg-[#F7F7F8] "
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
          >
            <InputLabel
              className="text-[#8B8E95]"
              htmlFor="outlined-adornment-password"
            >
              Нууц үг
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <p className=" text-[14px] font-normal text-right">
            Нууц үг сэргээх{" "}
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
        <div className="mt-12 flex-col flex gap-8">
          <Button variant="ghost" onClick={handleLogin}>
            Нэвтрэх
          </Button>
          <p className="text-center">Эсвэл</p>
          <Button variant="outline" onClick={handleLogin}>
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </Stack>
  );
};
export default LoginModal;
