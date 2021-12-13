import { Box, CardActionArea, Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import React from "react";
// import Storage from "@aws-amplify/storage";
import { makeStyles } from "@mui/styles";
import moment from "moment";
// import { getImage, selectImageById } from "../../redux/reducers/imageSlice";
// import { useDispatch } from "react-redux";
import useHover from "../../Hooks/useHover";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "283px",
    margin: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
    },
  },
  paper: {},
  content: {
    maxHeight: "200px",
  },
  s3image: {
    width: "283px",
    height: "283px",
    borderRadius: "8px",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "173px",
      height: "173px",
      marginTop: "2.5rem",
    },
  },
}));

export default function MarketComponent({ item, type }) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [imageURL, setImageURL] = useState(null);
  const [hoverRef, isHover] = useHover();

  const {
    id,
    name,
    // description,
    price,
    imgURLs,
    // imgS3Keys,
    // marketItemCategory,
    // marketItemCondition,
    location,
    createdAt,
    // tags,
    // active,
    // ByCreatedAt,
  } = item;
  // const imgKeys = useSelector((state) => selectImageById(state, id));

  // useEffect(() => {
  //   const getImages = async () => {
  //     try {
  //       const firstImage = imgS3Keys[0];
  //       const response = await dispatch(getImage({ url: [firstImage], id }));
  //       setImageURL(response.payload.imgUrl);
  //     } catch (error) {
  //       console.error("error accessing the Image from s3", error);
  //       setImageURL(null);
  //     }
  //   };
  //   if (imgS3Keys && imgKeys === undefined) {
  //     getImages();
  //   } else if (imgS3Keys && imgKeys !== undefined) {
  //     setImageURL(Object.values(imgKeys.images)[0]);
  //   }
  // }, [imgS3Keys, imgKeys, dispatch, id]);

  const displayInfo = () => {
    return (
      <React.Fragment>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#505050",
              fontWeight: "600",
              lineHeight: "1.3333",
            }}
          >
            ${price} {isHover ? "🥳" : "😩"}
          </Typography>
        </Box>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#505050",
              fontWeight: "400",
              lineHeight: "1.33333",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box my={"4px"}>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#65676B",
              fontWeight: "400",
              lineHeight: "1.2308",
            }}
          >
            {location}
          </Typography>
          <Box my={"4px"}>
            <Typography
              sx={{
                fontSize: "13px",
                color: "#65676B",
                fontWeight: "400",
                lineHeight: "1.2308",
              }}
            >
              {moment(createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </React.Fragment>
    );
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <CardActionArea
        ref={hoverRef}
        component={Link}
        to={`/market/${type}/${id}`}
        sx={{
          transition: "background-color 0.7s",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <img src={imgURLs[0]} alt="" className={classes.s3image} />
        <Box my={"8px"}>{displayInfo()}</Box>
      </CardActionArea>
    </Paper>
  );
}
