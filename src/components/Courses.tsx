import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Grid,
} from "@mui/material";
import CoursesData from "../CouresesData/Coursemain.json";
import Footer from "./Footer";
import { iconMapping, platformIcons, IconKey, PlatformKey } from "./Icons";

const Courses: React.FC = () => {
  return (
    <div>
      <Box sx={{ mt: 5, backgroundColor: "#eee" }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Courses
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {CoursesData.map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box px={3}>
                <Card sx={{ minHeight: 250, backgroundColor: "#e1bee7" }}>
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 1 }}
                    >
                      {iconMapping[course.icon as IconKey]}{" "}
                    </Box>
                    <Typography variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {course.description}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                      }}
                    >
                      {Object.entries(course.links).map(([platform, url]) => (
                        <IconButton
                          key={platform}
                          component="a"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {platformIcons[platform as PlatformKey]}
                        </IconButton>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography sx={{ mt: 1 }}>
        <Footer />
      </Typography>
    </div>
  );
};

export default Courses;
