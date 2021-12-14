import {
  Box,
  Button,
  CardActions,
  CardHeader,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomAvatar from "../../../CustomMUI/CustomAvatar";
import SignInRequest from "../../SignInRequest";
// import SignInRequest from "../SignInRequest";
import { green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { postEventComment } from "../../../../redux/slice/eventSlice";

const useStyles = makeStyles({
  root: {},
  subTitle: {
    paddingBlock: "3rem 1rem",
  },
  card: {},
});

export default function EventCommentsPost({ event }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userAuth } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    comment: "",
  });

  const { comment } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createEventCommentInput = {
    content: comment,
    active: true,
    eventID: event.id,
    userID: userAuth.user.username,
  };

  const postComment = async (e) => {
    if (!loading) {
      setLoading(true); //开始转圈
      const response = await dispatch(
        postEventComment({ createEventCommentInput })
      );
      if (response.meta.requestStatus === "fulfilled") {
        setLoading(false);
        setFormData({
          comment: "",
        });
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {userAuth.isAuthenticated ? "" : <SignInRequest />}

      <div>
        <Typography className={classes.subTitle}>发布新评论：</Typography>
        <Box className={classes.main}>
          <Grid container spacing={0}>
            <Grid item xs={"auto"}>
              <CardHeader
                sx={{ px: 0 }}
                avatar={
                  <CustomAvatar
                    user={userAuth.userProfile}
                    link={userAuth.isAuthenticated}
                  />
                }
              />
            </Grid>
            <Grid item xs>
              <Box sx={{ my: 1 }}>
                <TextField
                  label="发表公开评论..."
                  variant="standard"
                  fullWidth
                  multiline
                  disabled={loading || !userAuth.isAuthenticated}
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => onChange(e)}
                />
              </Box>
              <CardActions sx={{ p: 0, justifyContent: "flex-end" }}>
                <Button
                  color="primary"
                  size="large"
                  variant="text"
                  disabled={loading || !userAuth.isAuthenticated}
                  onClick={() => {
                    setFormData({
                      comment: "",
                    });
                  }}
                >
                  取消
                </Button>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={postComment}
                  disabled={loading || !userAuth.isAuthenticated}
                >
                  评论
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: green[500],
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: "-0.75rem",
                        marginLeft: "-0.75rem",
                      }}
                    />
                  )}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
