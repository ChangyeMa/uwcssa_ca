import {} from "../";

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  GlobalStyles,
  Rating,
  Snackbar,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
  colors,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";

import AssignmentIcon from "@mui/icons-material/Assignment";
import MuiAlert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";

// 按钮

//定义评价等级
const labels = {
  1: "Totally useless",
  2: "Very difficult",
  3: "Poor",
  4: "Ok",
  5: "Good",
  6: "Very easy",
  7: "Perfect",
};

// 模板
//定义不同页面的字号：
const theme = createTheme();
//不要在这里用这个东西createTheme。这个是全局的
theme.typography.h5 = {
  fontSize: "0.9rem",

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

// 模板
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#cfe8fc",
  },
  TextField: {
    width: 250,
    [theme.breakpoints.up("md")]: {
      width: 450,
    },
  },
}));

export default function UserFeedBack() {
  const classes = useStyles();
  const [value, setValue] = useState(7); // 评价默认值是7 （满分）
  const [hover, setHover] = useState(-1); //
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div className={classes.root}>
      <Box sx={{ bgcolor: "#cfe8fc", height: "2vh" }} />
      <Container maxWidth="sm">
        <Box mt={3} sx={{ bgcolor: "#cfe8fc" }} />
        <Box border={1} sx={{ bgcolor: "white" }}>
          <Stack
            mt={3}
            mx={5}
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Avatar sx={{ width: 50, height: 50, bgcolor: colors.green[500] }}>
              <AssignmentIcon />
            </Avatar>
            <Typography variant="h5">意见箱</Typography>
          </Stack>
          <Box mt={4} mx={5}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5">
                你觉得我们的网站使用起来是否方便？
              </Typography>
            </ThemeProvider>
          </Box>

          <Box mt={3} mx={5}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              max={7}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={0}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>

          <Box mt={5} mx={5}>
            <Box m="auto" alignItems="center" mt={2}>
              <TextField
                className={classes.TextField}
                multiline={true}
                id="reason"
                label={"您给我们这个分数的主要原因是什么？"}
                variant="outlined"
                minRows={3}
              />
            </Box>
          </Box>

          <Box mt={5} mx={5}>
            <Box m="auto" alignItems="center" mt={2}>
              <TextField
                className={classes.TextField}
                multiline={true}
                id="improvement"
                label="我们可以做些什么来改善网站上的体验？"
                variant="outlined"
                minRows={3}
              />
            </Box>
          </Box>
          <Container></Container>
          <Box mt={3} mb={3} onClick={handleClick}>
            <Button
              type="submit"
              color="primary"
              size="large"
              sx={{ borderRadius: 50 }}
            >
              提交
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message="Thank you!"
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Your opinion is received, thank you!
              </Alert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
      <Box mt={3} sx={{ bgcolor: "#cfe8fc", height: "2vh" }} />
    </div>
  );
}
