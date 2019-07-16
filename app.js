import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hi form from my ass");

const handleProfile = (req, res) => res.send("You are on my profile");

//누군가 URL로 접근
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet()); // 보안
app.use(morgan("dev"));// 모든 걸 기록


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

//다른 곳에서도 app object를 사용할 수 있게 하기 위해 내보내는 것
export default app;

