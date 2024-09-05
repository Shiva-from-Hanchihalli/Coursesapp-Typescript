import React from "react";
// import SchoolIcon from "@mui/icons-material/School";
// import ComputerIcon from "@mui/icons-material/Computer";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
// import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
// import { Javascript } from "@mui/icons-material";

const CustomIcon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: 30, height: 30 }} />
);
const CustomIcons:React.FC<{src: string; alt: string}> = ({ src, alt }) => (
    <img src={src} alt={alt} style={{ width: 50, height: 50 }} />
  );
  export type IconKey = 
  | 'React'
  | 'Javascript'
  | 'HTML'
  | 'Java'
  | 'Python'
  | 'C'
  | 'Node'
  | 'Typescript'
  | 'Reduxjs'
  | 'Expressjs'
  | 'MongoDB'
  | 'MYSQL'
  | 'cloud'
  | 'Reactnative'
  | 'SAPUI5'
  | 'InterviewPreparation';



  export const iconMapping: Record<IconKey, JSX.Element> = {
    React: <CustomIcons src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" alt="React" />,
  Javascript: <CustomIcons src="  https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png
" alt="Javascript" />,
HTML: <CustomIcons src="https://goldeneagle.ai/static/images/technology/html-css.png
" alt="HTML" />,
Java: <CustomIcons src="https://dev.java/assets/images/java-logo-vert-blk.png
" alt="Java" />,
Python: <CustomIcons src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJ8gZmML3-V-ztaF8bYk1fkF16MXiSfHhMQ&s
" alt="Python" />,
C: <CustomIcons src="https://www.shutterstock.com/image-vector/c-language-logo-simple-colours-600nw-2113921046.jpg
" alt="C" />,
Node: <CustomIcons src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png
" alt="Node" />,
Typescript: <CustomIcons src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png
" alt="TS" />,
Reduxjs: <CustomIcons src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png
" alt="Redux" />,
Expressjs: <CustomIcons src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png
" alt="Express" />,
MongoDB: <CustomIcons src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png
" alt="MongoDB" />,
MYSQL: <CustomIcons src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png
" alt="MYSQL" />,
cloud: <CustomIcons src="https://qph.cf2.quoracdn.net/main-qimg-83c63039e132459fb9404aaa157e4c3c-lq
" alt="cloud" />,
Reactnative: <CustomIcons src="https://w7.pngwing.com/pngs/363/962/png-transparent-react-native-hd-logo.png
" alt="Reactnative" />,
SAPUI5: <CustomIcons src="https://i.ytimg.com/vi/T-wn_PmSYPY/hqdefault.jpg
" alt="SAPUI5" />,
InterviewPreparation: <CustomIcons src="https://cdn.prod.website-files.com/6242f480c281185091f94d52/6262c3161abdd90a938e8a77_625837e19d80bd0780a0a18c_interveiw.jpeg
" alt="InterviewPreparation" />,
};

export type PlatformKey = 'YouTube' | 'GitHub' | 'GoogleDrive' | 'LeetCode' | 'W3Schools' | 'CodeSandbox' | 'React' | 'prepinsta' | 'TechDev' | 'ResumeBuilder' | 'JavaTPoint' | 'Todoapp' | 'Mongodb' | 'MYSQL' | 'AZURE' | 'DEMOKIT' | 'SAP';

export const platformIcons: Record<PlatformKey, JSX.Element> = {
 YouTube:(
<Tooltip title="Youtube" arrow>
  <span>
  <YouTubeIcon sx={{ fontSize: 30, color: 'Red' }} />
</span>
</Tooltip>
  ),
  GitHub:(
<Tooltip title="Github" arrow>
<span>
   <GitHubIcon sx={{ fontSize: 30 }} />
   </span>
</Tooltip>
  ),
  GoogleDrive: (
    <Tooltip title="Google Drive" arrow>
      <span>
      <AddToDriveIcon
        sx={{
          fontSize: 30,
          background: "linear-gradient(135deg, #ff00cc, #3333ff)",
          borderRadius: "50%",
          padding: "5px",
          color: "white",
          backdropFilter: 'blur(4px)',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
      </span>
    </Tooltip>
  ),  LeetCode:(  <Tooltip title="LeetCode" arrow>
      <span>
        <CustomIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h4yf5vhuu8_Dqf5VC1l1tFbIJ88N4H24jg&s" alt="LeetCode" />    
        </span>
      </Tooltip>),
  W3Schools:( 
    <Tooltip title="W3Schools" arrow>
      <span>
        <CustomIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_fjRVJLHlGB9w7R5zuvuciwZ9zwgGN6-oQ&s" alt="W3Schools" />
        </span>
        </Tooltip>
  ),
  CodeSandbox:(
    <Tooltip title="CodeSandbox" arrow>
      <span>
     <CustomIcon src="https://s3.eu-west-1.amazonaws.com/niice-cms/2021/03/02/603ec20dc80e6codesandbox-1.png" alt="CodeSandbox" />
     </span>
     </Tooltip>
  ),
  React:(
    <Tooltip title="React" arrow>
      <span>
     <CustomIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="React" />
     </span>
     </Tooltip>
    ),
  prepinsta: (
    <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XVZY-ICvA3Joa5xPSOUA9ftRuX-9MNlACA&s" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none' }}>
      Prepinsta
    </a>
  ),
  TechDev: (
    <a href="https://techdevguide.withgoogle.com/paths/interview/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 17, textDecoration: 'none' ,  color:'red'}}>
      TechDev
    </a>
  ),
  ResumeBuilder: (
    <a href="https://www.overleaf.com/project/66ced025310288707670c26e" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, textDecoration: 'none', color: 'Blue' }}>
      ResumeBuilder
    </a>
  ),
  JavaTPoint: (
    <a href="https://www.javatpoint.com/java-tutorial" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
      JavatPoint
    </a>
  ),

  Todoapp: (
    <a href="https://www.youtube.com/watch?v=TzlcavuwNvo" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
      Project
    </a>
  ),
  Mongodb: (
    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
      M_DB
    </a>
  ),
 MYSQL: (
    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
       MYSQL
    </a>
  ),
AZURE: (
    <a href="https://youtube.com/playlist?list=PLdpzxOOAlwvIcxgCUyBHVOcWs0Krjx9xR&si=-Qz1My5DfW-PxBqx" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
       AZURE
    </a>
  ),
  DEMOKIT: (
    <a href="https://sapui5.hana.ondemand.com/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
     DEMOKIT
    </a>
  ),
  SAP: (
    <a href="https://community.sap.com/t5/technology-blogs-by-sap/learning-sapui5-for-beginners/ba-p/13470938" target="_blank" rel="noopener noreferrer" style={{ fontSize: 20, textDecoration: 'none', color: 'Blue' }}>
     SAP
    </a>
  ),
};

export default { iconMapping, platformIcons };