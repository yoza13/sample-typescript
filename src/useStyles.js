import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();
console.log(theme);

export const useStyles = makeStyles(() => ({
  drawerListItem: {
    color: "inherit",
  },
  appContainer: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "240px",
    },
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 240px)",
      maxWidth: "inherit",
    },
    width: "100%",
    maxWidth: "inherit",
  },
  homePageAvatar: {
    width: 120,
    height: 120,
    border: "5px solid #8f40e9",
    borderColor: (props) =>
      props.isDarkTheme
        ? theme.palette.common.black
        : theme.palette.primary.dark,
  },
  calculatorBox: {
    width: "fit-content",
    margin: "auto",
  },
  displayField: {
    color: "#fff",
    backgroundColor: (props) =>
      props.isDarkTheme ? theme.palette.grey.dark : theme.palette.grey[400],
    fontWeight: "bold",
    height: "3em",
    textAlign: "right",
    fontSize: "24px",
  },
  buttonPanel: {
    marginBottom: "2rem",
  },
  buttonStack: {
    borderTop: "1px solid",
    "&:last-child": {
      borderBottom: "1px solid",
    },
  },
  buttons: {
    fontSize: "24px",
    color: (props) => (props.isDarkTheme ? "#fff" : "#000"),
    borderRight: "1px solid",
    borderRadius: 0,
    width: "25%",
    backgroundColor: (props) =>
      props.isDarkTheme ? theme.palette.grey.dark : theme.palette.grey[200],
    "&:last-child": {
      borderRight: "none",
      backgroundColor: (props) =>
        props.isDarkTheme
          ? theme.palette.warning.dark
          : theme.palette.warning.light,
    },
    "&.wide": {
      width: "50%",
    },
  },
  contentBox: {
    margin: "0 0 3rem 0",
    paddingTop: "2rem",
    boxShadow: (props) =>
      props.isDarkTheme
        ? "0px 6px 7px -4px rgba(128,128,128,0.8),0px 11px 15px 1px rgba(128,128,128,0.8),0px 4px 20px 3px rgba(128,128,128,0.8)"
        : theme.shadows[11],
    backgroundColor: theme.palette.mode,
  },
  listStyleDisc: {
    listStyle: "disc",
  },
  listAsItem: {
    display: "list-item",
  },
  experienceCard: {
    maxWidth: 345,
    marginRight: "2rem",
    marginBottom: "3rem",
    marginLeft: "2rem",
  },
  boldWeight: {
    fontWeight: "bold",
  },
  dividerStyle: {
    borderColor: "inherit",
    margin: "auto",
    width: "60%",
    marginBottom: "1rem",
  },
  experienceAccordionStack: {
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  experienceCardsStack: {
    flexWrap: "wrap",
    margin: "0 auto",
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  downloadBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  downloadLinks: {
    border: (props) =>
      props.isDarkTheme
        ? `10px solid ${theme.palette.secondary.dark}`
        : `10px solid ${theme.palette.primary.dark}`,
    padding: " 1rem 2rem",
    marginBottom: "2rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    backgroundImage: (props) =>
      props.isDarkTheme
        ? `linear-gradient(${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
        : `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
  footer: {
    borderTop: "1px solid",
    backgroundColor: (props) =>
      props.isDarkTheme ? theme.palette.grey[900] : theme.palette.primary.main,
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "240px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "calc(100% - 240px)",
    maxWidth: "inherit",
    zIndex: 100,
  },
}));
