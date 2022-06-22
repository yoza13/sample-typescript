import React, { Fragment, useContext, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useStyles } from "../useStyles";
import Resume_Pdf from "../Yash_Oza_Resume.pdf";
import Resume_Doc from "../Yash_Oza_Resume.docx";
import AppContext from "../ApplicationContext";
import summary from "../content/summary.json";
import ReactApexChart from "react-apexcharts";

export default function AboutMe() {
  const languagesForChart = [
    "Javascript",
    "React",
    "Angular",
    "Redux",
    "Node",
    "JAVA",
    "HTML",
    "CSS",
    "Typescript",
    ".NET",
    "AWS",
    "Jenkins",
    "WebdriverIO",
    "Cucumber",
  ];
  const dataForChart = [
    1380, 1240, 600, 1240, 1380, 720, 1380, 1380, 1040, 550, 550, 843, 1380,
    1145,
  ];
  const [showSummary, setShowSummary] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const { isDarkTheme } = useContext(AppContext);
  const classes = useStyles({ isDarkTheme });
  return (
    <Container className={classes.appContainer}>
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
              <ListItemIcon>
                {showSummary ? (
                  <MenuOpenIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </ListItemIcon>
              <Typography
                variant="h5"
                align="center"
                gutterBottom={true}
                textAlign="center"
              >
                Summary
              </Typography>
            </ListItemButton>
            {showSummary && (
              <List
                component="ul"
                aria-label="summary"
                className={classes.listStyleDisc}
              >
                {summary?.summary &&
                  summary?.summary.map((sum, index) => {
                    return (
                      <Fragment key={index}>
                        <ListItem button={false}>
                          <Slide
                            direction={index % 2 === 0 ? "left" : "right"}
                            in={true}
                          >
                            <ListItemText primary={sum} />
                          </Slide>
                        </ListItem>
                        <Divider className={classes.dividerStyle} />
                      </Fragment>
                    );
                  })}
                <ListItem>
                  <LocationOnOutlinedIcon /> <Typography>Edison, NJ</Typography>
                </ListItem>
              </List>
            )}
            <ListItemButton onClick={() => setShowSkills(!showSkills)}>
              <ListItemIcon>
                {showSummary ? (
                  <MenuOpenIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </ListItemIcon>
              <Typography variant="h5" align="center" gutterBottom={true}>
                Skills
              </Typography>
            </ListItemButton>
            {showSkills && (
              <ReactApexChart
                options={{
                  chart: {
                    type: "bar",
                    height: 350,
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    },
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  xaxis: {
                    categories: languagesForChart,
                  },
                }}
                series={[
                  {
                    data: dataForChart,
                  },
                ]}
                type="bar"
                height={350}
              />
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
