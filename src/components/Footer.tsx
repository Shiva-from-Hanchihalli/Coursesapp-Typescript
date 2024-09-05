import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled, keyframes } from '@mui/material/styles';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  width: '98%', 
  bottom: 0,        
  left: 0,
}));

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '& > *': {
    marginLeft: theme.spacing(1),
    paddingRight: theme.spacing(3),
  },
}));

const AnimatedText = styled('span')(({  }) => ({
  background: 'yellow', 
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${gradientAnimation} 4s ease infinite`,
  fontWeight: 'bold',
}));

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
          © {new Date().getFullYear()} | <AnimatedText>Developed By Shivakumar H M</AnimatedText> | All rights reserved.
        </Typography>
        <SocialMediaContainer >
        <IconButton aria-label="Twitter" color="inherit" href="https://shivanewweb.netlify.app/" target="_blank" rel="noopener noreferrer">
            <AssignmentIndOutlinedIcon />
          </IconButton>
          <IconButton aria-label="Instagram" color="inherit" href="https://www.instagram.com/_its_shiva_r/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="GitHub" color="inherit" href="https://github.com/Shiva-from-Hanchihalli" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </IconButton>
          <IconButton aria-label="LinkedIn" color="inherit" href="https://www.linkedin.com/in/shivakumar-h-m-107288212/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
        </SocialMediaContainer>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
