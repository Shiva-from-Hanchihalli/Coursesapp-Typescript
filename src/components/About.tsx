import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';
import '../styles/About.css';
import { Link } from 'react-router-dom';


const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const About: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 1 }}>
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            About Us
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              mb: 4,
              backgroundImage:
                'url(https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg)',
              backgroundSize: 'cover',
              color: '#fff',
            }}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              This platform is dedicated to providing learners with the best tools and resources to upskill and achieve their goals. I strive to gather the most valuable and trending resources across various platforms,<strong style={{color:'orange'}}> all in one place.</strong>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2,color:'orange' }}>
              Here are some key points about This platform:
            </Typography>
            <ul style={{ marginLeft: '20px' }}>
              <li>
                We curate top resources for learning trending technologies.
              </li>
              <li>
                These resources are handpicked based on My experiences and feedback from other learners.
              </li>
              <li>
                You can access all resources easily, whether you're using a laptop or a mobile device. However, for the best experience, I recommend using a laptop.
              </li>
              <li>
                Log in to explore courses and start your learning journey.
              </li>
            </ul>
          </Paper>

          <Typography variant="h4" gutterBottom>
            Our Mission & Vision
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} >
              <AnimatedCard>
                <CardContent className='backgrnd'>
                  <Typography variant="h5" sx={{color:'white'}}>Our Mission</Typography>
                  <Typography sx={{color:'white'}} variant="body2">
                    To simplify learning through innovative and accessible educational tools.
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AnimatedCard>
                <CardContent className='backgrndd'>
                  <Typography variant="h5"sx={{color:'white'}}>Our Vision</Typography>
                  <Typography sx={{color:'white'}} variant="body2">
                    To be the go-to platform for anyone seeking to upskill and transform their careers with cutting-edge educational tools.
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          </Grid>
        </Box>

          <Box sx={{ my: 5 }}>
    <Typography variant="h4" gutterBottom>
      Featured Tools & Resources
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <AnimatedCard>
        <CardContent>
            <img
              src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.jpg"
              alt="Tool 3"
              style={{ width: '115%' }}
            />
            <Typography variant="h6">
              Interview Preparation & Resume Building
            </Typography>
            <Typography variant="body2">
              Access top platforms for interview preparation and resume building. Our resources are designed to help you excel in your career pursuits.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AnimatedCard>
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD65b-0YHKMM6Sczmlt1ipaQng22ATcV7d_w&s"
              alt="Tool 2"
              style={{ width: '100%' }}
            />
            <Typography variant="h6">
              Upskill on Leading Coding Platforms
            </Typography>
            <Typography variant="body2">
              Continuously improve your skills and knowledge by practicing on the leading coding platforms we recommend. Stay competitive and ready for the challenges ahead.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AnimatedCard>
        <CardContent>
            <img
              src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
              alt="Tool 1"
              style={{ width: '133%' }}
            />
            <Typography variant="h6">
              Practice with Tools like CodeSandbox
            </Typography>
            <Typography variant="body2">
              Utilize CodeSandbox and similar tools provided in our courses to enhance your learning experience and stay updated with trending technologies.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
    </Grid>
  </Box>


        <Box sx={{ my: 5 }}>
          <Typography variant="h4" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1">
            Have questions? Reach out to me at: <strong>shivakumarhm9353@gmail.com</strong>
          </Typography>
          <Typography variant="body1">
        Or you can get my contact details on the{' '}
        <Link to="/Contact" style={{ color: 'blue', textDecoration: 'none' }}>
          Contact page
        </Link>
      </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
