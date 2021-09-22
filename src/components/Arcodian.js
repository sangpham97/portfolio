import React from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { List, ListItem } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function Arcodian({ type, data }) {
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ backgroundColor: "lightgreen" }}
      >
        <Typography className={classes.heading}>{type}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {data.map((item, i) => {
            return (
              <ListItem key={i}>
                {type === "Projects" ? (
                  <Link
                    to={"/Projects/" + item.slug}
                    style={{ textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    to={"/Blogs/" + item.slug}
                    style={{ textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                )}
              </ListItem>
            )
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  )
}
