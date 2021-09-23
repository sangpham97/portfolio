import { Chip, Container, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import { navLinks2 } from "../util"
import Title from "./Title"

export default function Header() {
  return (
    <Container maxWidth="md">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Phạm Thanh Sang</Title>
      </Link>
      <Typography align="center" variant="h5" color="textPrimary">
        Front-End Developer
      </Typography>
      <Typography align="center">
        {navLinks2.map((item, i) => (
          <Link to={item.navigate}>
            <Chip
              label={item.name}
              icon={item.icon}
              key={i}
              style={{
                fontSize: "1.2rem",
                padding: 20,
                margin: 10,
                cursor: "pointer",
              }}
            />
          </Link>
        ))}
      </Typography>
    </Container>
  )
}
