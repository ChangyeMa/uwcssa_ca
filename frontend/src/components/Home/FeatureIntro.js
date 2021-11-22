import { Box, Button, Container, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@mui/styles";
import uwcssabbs from "../../static/uwcssabbs.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "#fff",
    textAlign: "center",
  },
  inner: {
    width: "100%",
    margin: "auto",
    padding: "0 1rem",
  },
  title: {
    paddingTop: "5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  text: {
    maxWidth: 1000,
    textAlign: "start",
    marginBottom: "1.5rem",
    margin: "auto",
    padding: "0 0.25rem",
  },
  bbsTag: { marginBottom: "5rem", marginInline: "0.2rem" },
  gif: {
    maxWidth: 750,
    width: "95%",
  },
}));

export default function FeatureIntro() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.root} width="100%">
        <Box className={classes.inner} width="100%">
          <Container size="lg">
            <Typography variant="h4" className={classes.title}>
              UWCSSA 论坛即将到来!
            </Typography>
            <div className={classes.text}>
              <Typography variant="h5">
                我们相信，对学生最好的支持往往来自于其他学生。他们是真正理解学生所面临的挑战的人，因为他们自己也面临这些挑战。
              </Typography>
              <Typography variant="h5">
                uwcssa论坛是一个在线社区，成千上万的学生将在这里相互帮助。它为所有年轻人而存在，uwcssa论坛几乎涵盖了您能想到的所有领域:
              </Typography>
            </div>
            <div className={classes.bbsTag}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/学习帮助"
              >
                学习帮助
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/大学和大学课程"
              >
                大学和大学课程
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/职业和工作"
              >
                职业和工作
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/娱乐"
              >
                娱乐
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/生活"
              >
                生活
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/forum/住房"
              >
                住房
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 16,
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginBlock: "0.3rem",
                }}
                component={Link}
                to="/market"
              >
                商城
              </Button>
            </div>

            <img src={uwcssabbs} alt="uwcssabbs.gif" className={classes.gif} />
          </Container>
        </Box>
      </Box>
    </div>
  );
}
