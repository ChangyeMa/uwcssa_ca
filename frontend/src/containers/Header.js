import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArticleIcon from "@mui/icons-material/Article";
import CustomAvatar from "../components/CustomMUI/CustomAvatar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DrawerList from "../components/Drawer/DrawerList";
import EventIcon from "@mui/icons-material/Event";
import ForumIcon from "@mui/icons-material/Forum";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import ShopIcon from "@mui/icons-material/Shop";
import WorkIcon from "@mui/icons-material/Work";
import { makeStyles } from "@mui/styles";
import { signOut } from "../redux/slice/authSlice";
import uwcssaLogo from "../static/uwcssa_logo.svg";

const StyledAppBar = styled((props) => <AppBar {...props} />)(({ theme }) => ({
  // "& .MuiPaper-root": {
  //   "& .MuiAppBar-root": {
  //     boxShadow: "none",
  //   },
  // },
}));

const StyledToolBar = styled((props) => <Toolbar {...props} />)(
  ({ theme }) => ({
    // "& .MuiToolbar-root": {
    //   height: "56px",
    // },
  })
);

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // maxWidth: "1300px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  title2: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  uwcssaLogo: {
    width: 36,
    height: 36,
    marginInline: "1rem",
  },

  sectionDesktop: {
    display: "none",
    marginInline: "1rem",
    [theme.breakpoints.up("1300")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("1300")]: {
      display: "none",
    },
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  appBarRoot: {
    root: { boxShadow: "none" },
  },
}));
export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const userAuth = useSelector((state) => state.userAuth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const signOut_user = async () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    const response = await dispatch(signOut());
    if (response.meta.requestStatus === "fulfilled") {
      history.push("/");
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/account/dashboard"
      >
        <DashboardIcon />
        个人中心
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to={
          userAuth.user === null
            ? ""
            : `/account/profile/${userAuth.user.username}`
        }
      >
        <PublicIcon />
        个人资料
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        to="/account/myAccount"
        disabled
      >
        <ManageAccountsIcon />
        我的账户
      </MenuItem>
      <MenuItem onClick={handleMenuClose} disabled>
        <SettingsIcon />
        设置
      </MenuItem>
      <MenuItem onClick={signOut_user}>
        <LogoutIcon />
        注销
      </MenuItem>
    </StyledMenu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ maxWidth: "300px" }}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <p>左上角有功能键哦</p>
      </MenuItem>
      {isAuthenticated ? (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>{userAuth.user.username}</p>
        </MenuItem>
      ) : (
        <MenuItem component={Link} to="/auth/signIn" onClick={handleMenuClose}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>登陆</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <StyledAppBar color="inherit" elevation={0} variant="outlined">
        <StyledToolBar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawer} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer} />
          </Drawer>
          <img
            src={uwcssaLogo}
            alt="uwcssaLogo"
            className={classes.uwcssaLogo}
          />
          <Typography
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer" }}
            className={classes.title2}
            variant="h5"
            noWrap
          >
            UWCSSA
          </Typography>
          <Typography
            onClick={() => {
              history.push("/");
            }}
            style={{ cursor: "pointer", fontSize: "25px" }}
            className={classes.title}
            // variant="h6"
            noWrap
          >
            温莎大学中国学生学者联谊会
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/article"
              startIcon={<ArticleIcon />}
            >
              近期新闻
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/event"
              startIcon={<EventIcon />}
            >
              活动
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/forum"
              startIcon={<ForumIcon />}
            >
              论坛
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/market"
              startIcon={<ShopIcon />}
            >
              商城
            </Button>
            <Button
              variant="text"
              style={{ fontSize: "20px", marginInline: "1rem" }}
              component={Link}
              to="/career"
              startIcon={<WorkIcon />}
            >
              加入我们
            </Button>
            {isAuthenticated ? (
              ""
            ) : (
              <Button
                component={Link}
                to="/auth/signIn"
                variant="text"
                style={{
                  fontSize: "20px",
                  marginInline: "1rem",
                }}
                startIcon={<LoginIcon />}
              >
                登陆
              </Button>
            )}
            {isAuthenticated ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {/* <AccountCircle fontSize={"large"} /> */}
                <CustomAvatar
                  user={userAuth.userProfile}
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
            ) : (
              ""
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </StyledToolBar>
      </StyledAppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
