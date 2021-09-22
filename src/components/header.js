import * as React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Container, Drawer, List, ListItem } from "@material-ui/core"
import { useState } from "react"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  item: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
    },
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "1.3rem",
    color: "white",
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    fontSize: "1.2rem",
  },
  logo: {
    flexGrow: 1,
  },
}))

const Header = ({ Links }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#4caf50",
          padding: "5px 0",
          justifyContent: "space-between",
        }}
      >
        <Toolbar variant="dense">
          <Container maxWidth="lg" style={{ display: "flex" }}>
            <Typography variant="h4" color="inherit" className={classes.logo}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                SangDev
              </Link>
            </Typography>
            <div className={classes.wrapper}>
              {Links.map((item, i) => {
                return item.link ? (
                  <a
                    className={classes.item}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    key={i}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.navigate} key={i} className={classes.item}>
                    <div style={{ display: "flex" }}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List
                style={{
                  width: 250,
                  backgroundColor: "#4caf50",
                  height: "100%",
                }}
              >
                {Links.map((item, i) => (
                  <ListItem key={i}>
                    {item.link ? (
                      <a
                        className={classes.item}
                        href={item.link}
                        style={{ marginTop: 10 }}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link to={item.navigate} className={classes.item}>
                        {item.name}
                      </Link>
                    )}
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
