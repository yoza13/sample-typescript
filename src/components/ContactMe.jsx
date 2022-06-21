import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React from "react";
import { useStyles } from "../useStyles";

export default function ContactMe() {
  const classes = useStyles();
  return (
    <Container className={classes.appContainer}>
      <Box className={classes.contentBox}>
        <Slide direction="left" in={true}>
          <Typography
            variant="h5"
            variantMapping={{ h5: "h1" }}
            sx={{ fontWeight: "bold" }}
            align="center"
          >
            Contact Me
          </Typography>
        </Slide>
        <Slide direction="right" in={true}>
          <Divider className={classes.dividerStyle} />
        </Slide>
        <Stack sx={{ alignItems: "center" }}>
          <Box className="cotact-me">
            <Typography variant="h6" variantMapping={{ h6: "h2" }}>
              You can react out to me using below details
            </Typography>
            <List component="ul" className={classes.listStyleDisc}>
              <ListItem button={false} className={classes.listAsItem}>
                <Link
                  href="https://www.linkedin.com/in/yash-oza"
                  underline="none"
                >
                  <Typography variant="h5" gutterBottom={true}>
                    <LinkedInIcon /> LinkedIn
                  </Typography>
                </Link>
              </ListItem>
              <ListItem button={false} className={classes.listAsItem}>
                <Link href="mailto:yashmichael@gmail.com" underline="none">
                  <Typography variant="h5" gutterBottom={true}>
                    <EmailOutlinedIcon /> Email
                  </Typography>
                </Link>
              </ListItem>
            </List>
            <Typography variant="h6" variantMapping={{ h6: "h2" }}>
              You can also access my Github using below Link
            </Typography>
            <List component="ul" className={classes.listStyleDisc}>
              <ListItem button={false} className={classes.listAsItem}>
                <Link href="https://github.com/yoza13" underline="none">
                  <Typography variant="h5" gutterBottom={true}>
                    GitHub
                  </Typography>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
