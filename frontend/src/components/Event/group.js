import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GroupIcon from "@mui/icons-material/Group";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import eventImg from "../../static/event.jpg";
import { makeStyles } from "@mui/styles";
import { postEventParticipant } from "../../redux/reducers/eventSlice";
import { useHistory } from "react-router";
import { useTitle } from "../../Hooks/useTitle";

const useStyles = makeStyles((theme) => ({
  rightBox: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "2rem",
    padding: "0 1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "0 10rem",
    },
  },
}));

export default function Individual() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userAuth } = useSelector((state) => state);
  const { eventID } = useParams();
  console.log(useParams, "useParams");
  useTitle(`近期活动 ${eventID} 团体报名`);
  console.log("event.id", eventID);
  const [eventParticipantData, setEventParticipantData] = useState({
    name: "",
    email: "",
    address: "",
    phone: undefined,
    weChat: "",
    message: "",
    numberOfPeople: "",
  });
  const uploadEventParticipant = async () => {
    const { name, email, address, phone, weChat, message, numberOfPeople } =
      eventParticipantData;

    const createEventParticipantInput = {
      id: `${eventID}-${userAuth.user.username}`,
      name,
      email,
      address,
      phone,
      weChat,
      message,
      numberOfPeople,
      eventParticipantStatus: "ArriveOnTime",
      active: true,
      eventID: eventID,
      userID: userAuth.user.username,
    };
    const response = await dispatch(
      postEventParticipant({ createEventParticipantInput })
    );
    console.log("postEventParticipant", response);
    if (response.meta.requestStatus === "fulfilled") {
      history.push(`/event/${eventID}/eventSignUp/success`);
    }
  };

  // const submit = () => {
  //   console.log(" Submitted");
  // };

  // const { handleChange, handleSubmit, handleBlur, state, errors } = useForm({
  //   initState,
  //   callback: submit,
  //   validator,
  // });

  // const isValidForm =
  //   state.fullName.length > 0 &&
  //   !errors.fullName &&
  //   state.email.length > 0 &&
  //   !errors.email &&
  //   state.guest.length > 0 &&
  //   !errors.guest;

  const isValid =
    eventParticipantData.name.length > 0 &&
    eventParticipantData.email !== "" &&
    eventParticipantData.phone !== "" &&
    eventParticipantData.weChat.length > 0 &&
    eventParticipantData.numberOfPeople.length > 0 &&
    eventParticipantData.numberOfPeople.match(/^-?\d+$/);

  return (
    <div>
      <Grid container component="main" sx={{ height: "100%" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${eventImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={6} elevation={6} noValidate>
          <Box className={classes.rightBox}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <GroupIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              团体报名
            </Typography>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="申请人姓名"
                placeholder="张三"
                name="name"
                autoComplete="name"
                autoFocus
                value={eventParticipantData.name}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    name: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="申请人邮箱"
                name="email"
                placeholder="e.g. xxxx@uwindsor.ca"
                autoComplete="email"
                value={eventParticipantData.email}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                required
                name="weChat"
                autoComplete="weChat"
                label="申请人微信号"
                value={eventParticipantData.weChat}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    weChat: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                required
                name="phone"
                placeholder="e.g. 1234567890"
                autoComplete="phone"
                label="申请人手机号码"
                value={eventParticipantData.phone}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    phone: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                label="地址（如需接送）"
                name="address"
                autoComplete="address"
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    address: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="参加总人数（含申请人）"
                name="numberOfPeople"
                placeholder="e.g. 5"
                autoComplete="numberOfPeople"
                value={eventParticipantData.numberOfPeople}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    numberOfPeople: e.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                fullWidth
                label="备注"
                name="message"
                autoComplete="message"
                multiline
                rows={4}
                value={eventParticipantData.message}
                onChange={(e) =>
                  setEventParticipantData({
                    ...eventParticipantData,
                    message: e.target.value,
                  })
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isValid}
                onClick={isValid ? uploadEventParticipant : null}
              >
                提交
              </Button>

              <Grid item>
                <Button
                  component={Link}
                  to="/event/eventSignUp"
                  variant="body2"
                >
                  返回
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
