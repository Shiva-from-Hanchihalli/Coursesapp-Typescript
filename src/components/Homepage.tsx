import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CodeIcon from '@mui/icons-material/Code';
// import SchoolIcon from '@mui/icons-material/School';
// import ComputerIcon from '@mui/icons-material/Computer';
import Footer from "./Footer";
import coursesData from "../CouresesData/Courses.json";
import { iconMapping ,IconKey} from "./Icons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Homepage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Main content */}
      <Box flex="1" textAlign="center" mt={4} p={2}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            py: 5,
            backgroundImage:
              "url(https://png.pngtree.com/thumb_back/fh260/background/20201023/pngtree-technological-background-vector-illustration-matrix-binary-computer-code-image_432632.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
            Welcome
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
  Advance your coding skills with these materials and interview preperation.
</Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/Login"
            sx={{ mt: 3 }}
          >
            Browse Courses
          </Button>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            <strong>Popular Courses </strong>
          </Typography>
          <Carousel
            swipeable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {coursesData.map((course, index) => (
              <Box key={index} px={1} sx={{ backgroundcolor: "blue" }}>
                <Card
                  sx={{
                    minHeight: 250,
                    backgroundColor: "lightblue",
                    boxShadow: 1,
                    p: 1,
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                    >
                      {iconMapping[course.icon as IconKey]}
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
                    <Button component={Link} to="/login" sx={{ mt: 2 }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Carousel>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Best Coding Platforms
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minHeight: 150, backgroundColor: "lightgreen" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Geeks For Geeks
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Practice coding in GFG.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href="https://www.geeksforgeeks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                  >
                    GFG
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minHeight: 150, backgroundColor: "#e1bee7" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    LeetCode
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Practice coding in LeetCode.
                  </Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href="https://leetcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                  >
                    LeetCode
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minHeight: 150, backgroundColor: "#ffccbc" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    CodeChef
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Practice coding in CodeChef.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href="https://www.codechef.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                  >
                    CodeChef
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Homepage;
