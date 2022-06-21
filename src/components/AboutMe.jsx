import React, { useContext, useState } from "react";
import BarChart from "react-bar-chart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Box,
  Collapse,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useStyles } from "../useStyles";
import Resume_Pdf from "../Yash_Oza_Resume.pdf";
import Resume_Doc from "../Yash_Oza_Resume.docx";
import AppContext from "../ApplicationContext";

export default function AboutMe() {
  const data = [
    { text: "ReactJS", value: 450 },
    { text: "Redux", value: 435 },
    { text: "Gatsby", value: 400 },
    { text: "GraphQL", value: 350 },
    { text: "Node", value: 300 },
    { text: "Express.js", value: 300 },
    { text: "AWS", value: 250 },
    { text: ".Net", value: 200 },
    { text: "Scipting", value: 200 },
    { text: "Jenkins", value: 350 },
  ];
  const [showSummary, setShowSummary] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const { isDarkTheme } = useContext(AppContext);
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const classes = useStyles({ isDarkTheme });
  return (
    <Container className="about-me">
      <Box className={classes.contentBox}>
        <Slide direction="left" in={true}>
          <Typography
            variant="h5"
            className={classes.boldWeight}
            variantMapping={{ h5: "h1" }}
            align="center"
          >
            About Me
          </Typography>
        </Slide>
        <Slide direction="right" in={true}>
          <Divider className={classes.dividerStyle} />
        </Slide>
        <Stack>
          <List>
            <ListItemButton onClick={() => setShowSummary(!showSummary)}>
              <Typography variant="h5" align="center" gutterBottom={true}>
                {showSummary ? <MenuOpenIcon /> : <MenuIcon />}
                Summary
              </Typography>
            </ListItemButton>
            {showSummary && (
              <>
                <List
                  component="ul"
                  aria-label="summary"
                  className={classes.listStyleDisc}
                >
                  <ListItem button={false}>
                    <Slide direction="left" in={true}>
                      <ListItemText
                        primary="Seven Years of experience as Web UI Developer/Technical
          Lead/Seni>or Software Developer."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false} divider>
                    <Slide direction="right" in={true}>
                      <ListItemText
                        primary="Worked on Web based user interface which was created using
          Node/React/Redux."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false} divider>
                    <Slide direction="left" in={true}>
                      <ListItemText
                        primary="Created/developed product design, design objectives, Usability
          Objective, sketches, user flow diagrams, wireframes for external
          (web) and internal (client/server) applications, mobile application,
          test web sites."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false}>
                    <Slide direction="right" in={true}>
                      <ListItemText
                        primary="Worked directly with cross-functional teams of Business
          Stakeholders, Analysts, Architects, Developers, Web/Graphic
          designers, Copywriters, Product Managers, Visual Designers, and
          Technical Architect, end users to determine user interface needs and
          implement innovative UI applications."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false}>
                    <Slide direction="left" in={true}>
                      <ListItemText
                        primary="Worked on Web based user interface which was created using
              Node/React/Redux."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false}>
                    <Slide direction="right" in={true}>
                      <ListItemText
                        primary="Worked on Web based user interface which was created using
              Node/React/Redux."
                      />
                    </Slide>
                  </ListItem>
                  <Divider className={classes.dividerStyle} />
                  <ListItem button={false}>
                    <Slide direction="left" in={true}>
                      <ListItemText
                        primary="Worked on Web based user interface which was created using
              Node/React/Redux."
                      />
                    </Slide>
                  </ListItem>
                </List>
                <Typography>
                  <LocationOnOutlinedIcon /> Edison,NJ
                </Typography>
              </>
            )}
            <ListItemButton onClick={() => setShowSkills(!showSkills)}>
              <Typography variant="h5" align="center" gutterBottom={true}>
                {showSkills ? <MenuOpenIcon /> : <MenuIcon />}
                Skills
              </Typography>
            </ListItemButton>
            {showSkills && (
              <Collapse orientation="horizontal" in={true}>
                <BarChart
                  colorBars
                  ylabel="Quantity"
                  width={700}
                  height={400}
                  margin={margin}
                  data={data}
                />
              </Collapse>
            )}
          </List>
        </Stack>
      </Box>
      <Stack className={classes.downloadBlock}>
        <a
          download={Resume_Pdf}
          href={Resume_Pdf}
          className={classes.downloadLinks}
        >
          &#9733; &nbsp;Download Resume as PDF &nbsp;&#9733;
        </a>
        <a
          download={Resume_Doc}
          href={Resume_Doc}
          className={classes.downloadLinks}
        >
          &#9733; &nbsp;Download Resume as Word &nbsp;&#9733;
        </a>
      </Stack>
    </Container>
  );
}
