import { makeStyles } from "@mui/styles";

export const detailStyle = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  images: {
    height: "100%",
    width: "calc(100% - 360px)",
    position: "relative",
    overflow: "hidden",
    float: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "50vh",
    },
  },
  contain: {
    width: "100%",
    overflow: "hidden",
    height: "calc(100vh - 64px)",
    bgcolor: "black",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      display: "block",
      height: "100%",
    },
  },
  info: {
    width: "360px",
    height: "100%",
    float: "left",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  fabBox: {
    margin: "8px",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 100,
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      left: 0,
      top: "64px",
    },
  },
}));
