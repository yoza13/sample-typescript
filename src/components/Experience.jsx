import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Travelers from "../travelers.png";
import Amex from "../american-express.png";
import adp from "../adp.png";
import Apple from "../apple.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import expData from "../content/experience.json";
import { useStyles } from "../useStyles";
import AppContext from "../ApplicationContext";

export default function Experience() {
  const [openResp, setOpenResp] = useState([]);
  const handleClick = (id) => {
    const updatedRespArray = openResp.includes(id)
      ? openResp.filter((o) => o !== id)
      : openResp.concat(id);

    setOpenResp(updatedRespArray);
  };
  const getImage = (alt) => {
    if (alt === "Travelers") return Travelers;
    if (alt === "Amex") return Amex;
    if (alt === "ADP") return adp;
    if (alt === "apple") return Apple;
  };
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });

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
            Experience
          </Typography>
        </Slide>
        <Slide direction="right" in={true}>
          <Divider className={classes.dividerStyle} />
        </Slide>
        <Stack className={classes.experienceAccordionStack}>
          {expData.map((exp, index) => {
            return (
              <Accordion key={index + exp.header}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Stack>
                    <Typography>{exp.header}</Typography>
                    <Typography variant="caption" paragraph={true}>
                      {exp.duration}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <CardMedia
                    component="img"
                    height="194"
                    image={getImage(exp.altImage)}
                    alt={exp.altImage}
                    sx={{ width: "auto", margin: "auto" }}
                  />
                  <List
                    sx={{
                      width: "100%",
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="description"
                    subheader={
                      <ListSubheader component="div" id="description">
                        Description
                      </ListSubheader>
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.role} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <AccessTimeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.duration} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOnOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.location} />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Responsibilities" />
                    </ListItemButton>
                    <List component="ul" className={classes.listStyleDisc}>
                      {exp?.Responsibilities?.length &&
                        exp.Responsibilities.map((resp) => {
                          return (
                            <ListItemButton sx={{ pl: 4 }} key={index + resp}>
                              <ListItem
                                button={false}
                                className={classes.listAsItem}
                              >
                                <Slide direction="left" in={true}>
                                  <ListItemText primary={resp} />
                                </Slide>
                              </ListItem>
                            </ListItemButton>
                          );
                        })}
                    </List>
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Stack>
        <Stack direction="row" className={classes.experienceCardsStack}>
          {expData.map((exp, index) => {
            return (
              <Card className={classes.experienceCard} key={index + exp.header}>
                <CardHeader title={exp.header} subheader={exp.subHeader} />
                <CardMedia
                  component="img"
                  height="194"
                  image={getImage(exp.altImage)}
                  alt={exp.altImage}
                  sx={{ width: "auto", margin: "auto" }}
                />
                <CardContent>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="description"
                    subheader={
                      <ListSubheader component="div" id="description">
                        Description
                      </ListSubheader>
                    }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.role} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <AccessTimeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.duration} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOnOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={exp.location} />
                    </ListItemButton>
                    <ListItemButton onClick={() => handleClick(exp.id)}>
                      <ListItemIcon>
                        <WorkOutlineOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Responsibilities" />
                      {openResp.includes(exp.id) ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={openResp.includes(exp.id)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="ul" className={classes.listStyleDisc}>
                        {exp?.Responsibilities?.length &&
                          exp.Responsibilities.map((resp) => {
                            return (
                              <ListItemButton sx={{ pl: 4 }} key={index + resp}>
                                <ListItem
                                  button={false}
                                  className={classes.listAsItem}
                                >
                                  <Slide direction="left" in={true}>
                                    <ListItemText primary={resp} />
                                  </Slide>
                                </ListItem>
                              </ListItemButton>
                            );
                          })}
                      </List>
                    </Collapse>
                  </List>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
        <Typography align="center">
          Further in-depth experience can be found on my &nbsp;
          <Link href="https://www.linkedin.com/in/yash-oza/">Linkedin</Link>
        </Typography>
      </Box>
    </Container>
  );
}
