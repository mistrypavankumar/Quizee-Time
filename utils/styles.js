import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },

  glow: {
    flexGrow: 1,
  },

  main: {
    minHeight: "80vh",
  },

  footer: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  section: {
    marginTop: 10,
    marginBottom: 20,
  },

  form: {
    maxWidth: 800,
    margin: "0 auto",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBg: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
});

export default useStyles;
