import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Title from "./Title"

const useStyles = makeStyles(theme => ({
  avatar: {
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrapper: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <Box my={4} id="About">
      <Container maxWidth="md">
        <Title>About</Title>
        <Grid container spacing="1" alignItems="center" justifyContent="center">
          <Grid item md={5} sm={6} xs={12}>
            <Typography align="center">
              <StaticImage
                src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/214112318_4363119930417850_7310941627096619754_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=3WT3bKBqQYUAX_eh2j0&_nc_ht=scontent.fsgn6-2.fna&oh=bb11415a966a3ab30a06fc1fd3121235&oe=616F1419"
                className={classes.avatar}
                height={230}
                width={230}
              />
            </Typography>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <div className={classes.wrapper}>
              <Typography variant="h5" color="primary" gutterBottom>
                Hi! I'm Sang
              </Typography>
              <Typography variant="h6" gutterBottom>
                Mình là Front-End Dev , là một người rất hứng thú trong việc tìm
                tòi công nghệ lập trình web đặc biệt thích làm việc với {""}
                <strong>ReactJs. </strong>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
