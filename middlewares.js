import multer from "multer";
import routes from "./routes";

// 이건 추천되지 않는 방법임 , 이걸 아마존에 해야함!!!
const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "HwaTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null; // user가 존재하거나 존재하지않다면 비어진object를 보여주도록
  next();
};
// (로그아웃 상태인 경우에만 접근 허용)
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
