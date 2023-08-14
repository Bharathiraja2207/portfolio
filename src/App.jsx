import { useState } from 'react'
import './App.css'
import { Link } from 'react-scroll'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export default function App() {

  return (
    <div>
      
       <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img style={{height1:'25px',width:'25px'}} src='https://cdn-icons-png.flaticon.com/128/10846/10846349.png'></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BHARATHI RAJA A
          </Typography>
          <Button color="inherit"><Link to='project' smooth={true}>project</Link></Button>
          <Button color="inherit"><Link to='about' smooth={true}>About</Link></Button>
          <Button color="inherit"><Link to='skills' smooth={true}>Skills</Link></Button>
          <Button color="inherit"> <Link to='contact' smooth={true}>contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
      <br></br>
      <br></br>
      <br></br>
      
      <div>
      <section id='front'><Frontpage/></section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id='about'><About/></section>
      <section id='skills'><Skills/></section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section id='project'><Projects/></section>
      <br></br>
      <br></br>
      <br></br>
      <section id='contact'><Contect/></section>
      <br></br>
      <hr></hr>
      <section id='footer'><Footer/></section>
      </div>
     </div>  
  )
}

function Frontpage() {
const [text]=useTypewriter({
  words:['i am a fullstack developer','i enjoy coding','keep scrooling!'],loop:{},
})
  return (
    <div > 
      <div className='resume_fit'>
      <a href='https://drive.google.com/file/d/16nbuxWrctSActzxiCclLs67aEb4Jr926/view?usp=drive_link'target="_blank"><Button  variant="contained" color="success" size="large">resume  <img style={{height1:'25px',width:'25px'}} src='https://cdn-icons-png.flaticon.com/128/324/324999.png'></img></Button></a>
      </div>
      
    <div className='front_flex' >
      <h3 id='front_h3'><h1><h1><h1><h4>Hey, I'm Bharathi Raja</h4></h1></h1></h1></h3>
      <span style={{fontWeight:'bold',color:'green',height:'30px'}}><h3>{text}<Cursor/></h3></span>
      <div className='front_flex'>
      <p style={{height:'20px'}}><h3>I'm currently a Full Stack Developer seeking many ways to improve</h3></p>
        <p style={{height:'20px'}}><h3> my skills through problem-solving and creating various projects! </h3></p>
        <p style={{height:'20px',marginBottom:'50px'}}><h3>Scroll down to learn more about me.</h3></p>
        <Button  variant="contained" color="success"> <Link to='contact' smooth={true}>contact</Link></Button>
      </div>
       </div>
       </div>
  )
}
function About() {

  return (
    <div className='about' >
       <div>
        <img src='https://globaliasoft.com/wp-content/uploads/2021/09/reactjs_development.png'alt='animi pic'></img>
      </div>
      <div className='about_content'>
      <h1><h1 style={{color:'white'}}>ABOUT</h1></h1>
      <Card sx={{ minWidth: 275,maxWidth:700 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Hey there! I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. I possess a deep understanding of both front-end and back-end development and am constantly refining my abilities while seeking opportunities for growth in both domains.
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Currently, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations.
      </Typography>
  
      </CardContent>
    </Card>
      </div>
     
    </div>
  )
}

function Skills() {

  return (
    <div className='skill'>
      <h1 ><h3 style={{height:'30px',marginTop:'30px'}}>MY SKILLS</h3></h1>
    <div className='skill_content' style={{marginLeft:'20px'}}>
      <Card sx={{ maxWidth: 345,minHeight: 345,minWidth:250}}>
     <div className='skill_heading' style={{backgroundColor:'#2567f3'}}><img style={{height:'45px',width:'50px',color:"white"}}src='https://cdn-icons-png.flaticon.com/512/152/152843.png?w=740&t=st=1691577276~exp=1691577876~hmac=5777c157f62ac0223dbb821f03a2899468fbdf23b7840c6076cf65243e93a27a'></img> <h2  style={{color:'white'}}>Frontend</h2></div>
    <p><b>HTML</b></p>
    <p><b>CSS</b></p>
    <p><b>JavaScript</b></p>
    <p><b>ReactJS</b></p>
    <p><b>BootStrap</b></p>
    </Card> 
    <Card sx={{ minWidth: 250,minHeight: 345}}>
     <div  className='skill_heading' style={{backgroundColor:'#2567f3'}}><img style={{height:'45px',width:'50px'}}src='https://img.freepik.com/free-icon/code_318-932055.jpg?size=626&ext=jpg&ga=GA1.2.474052624.1691568044&semt=ais'></img> <h2 style={{color:'white'}}>Backend</h2></div>
     <p><b>NodeJS</b></p>
    <p><b>ExpressJS</b></p>
    <p><b>MySQL</b></p>
    <p><b>MongoDB</b></p>
    </Card>
    <Card sx={{ minWidth: 250,minHeight: 345}}>
     <div  className='skill_heading' style={{backgroundColor:'#2567f3'}}><img style={{height:'45px',width:'50px'}}src='https://img.freepik.com/free-icon/technical-support_318-915185.jpg?size=626&ext=jpg&ga=GA1.2.474052624.1691568044&semt=sph'></img> <h2  style={{color:'white'}}>Others</h2></div>
     <p><b>VSCode</b></p>
    <p><b>AWS</b></p>
    <p><b>GitHub</b></p>
    <p><b>Netlify</b></p>
    </Card>
    </div>
    </div>
  )
}

function Projects() {

  return (
    <div>
       <h2 style={{textAlign:'center'}}><h2>PROJECT</h2></h2>
    <div className='project'>
     
      <div className='project_content'>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i.ibb.co/v116PJX/Screenshot-19.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        REACT MARKDOWN EDITER
        </Typography>
        <Typography variant="body2" color="text.secondary">
        React-markdown is a React Component that converts
Markdown text into the corresponding HTML code.
        </Typography>
      </CardContent>
      <CardActions>
      <a href = "https://dashing-lokum-4209d2.netlify.app/"target="_blank"><Button sx={{minWidth:"250px",marginLeft:'16%'}} variant="contained" color="primary">go project</Button></a>
      </CardActions>
    </Card>
    </div>

    <div  className='project_content'>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://raulwebdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbookme.d2a81830.png&w=1920&q=75"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BOOK MY SHOW
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Book my show is a ticket booking app through online.
        </Typography>
      </CardContent>
      <CardActions>
      <a href = "https://ubiquitous-tapioca-60a2f3.netlify.app/"target="_blank"><Button sx={{minWidth:"250px",marginLeft:'16%'}} variant="contained" color="primary">go project</Button></a>
      </CardActions>
    </Card>
    </div>

    <div  className='project_content'>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://raulwebdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbookme.d2a81830.png&w=1920&q=75"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BUY FAST
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buy fast is a basic food delivery app through online.
        </Typography>
      </CardContent>
      <CardActions>
      <a href = "https://github.com/Bharathiraja2207"target="_blank"><Button sx={{minWidth:"250px",marginLeft:'16%'}} variant="contained" color="primary">go project</Button></a>
      </CardActions>
    </Card>
    
    </div>

    <div  className='project_content'>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green"
        height="140"
        image="https://raulwebdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbookme.d2a81830.png&w=1920&q=75"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <a href = "https://github.com/Bharathiraja2207"target="_blank"><Button sx={{minWidth:"250px",marginLeft:'16%'}} variant="contained" color="primary">go project</Button></a>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
  )
}
function Contect() {

  return (
    <div>
      <div>
      <h2 style={{textAlign:'center'}}>CONTACT</h2>
  </div>
      <div className='contact_content'>
      <Card className='contact_icon' sx={{ maxHeight:97,maxWidth: 345,minHeight:90,minWidth:250,backgroundColor:'#e5e6e7'}}>
      <img style={{height:'60px',width:'60px'}} src='https://cdn-icons-png.flaticon.com/128/145/145807.png'></img>
      <a href = "https://www.linkedin.com/in/bharathi-raja-a-87a925228?original_referer=https%3A%2F%2Fwww.google.com%2F"target="_blank"><Button  sx={{minWidth:"250px"}} variant="contained" color="primary">linkedin</Button></a>
    </Card> 
    <Card className='contact_icon' sx={{maxHeight:97,maxWidth: 345,minHeight:90,minWidth:250,backgroundColor:'#e5e6e7'}}>
    <img style={{height:'60px',width:'60px'}} src='https://cdn-icons-png.flaticon.com/128/732/732200.png'></img>
    <a href = "mailto:bharathiraja2207@gmail.com"target="_blank"><Button sx={{minWidth:"250px"}} variant="contained" color="primary">gmail</Button></a>
    </Card> 
    <Card className='contact_icon' sx={{maxHeight:97,maxWidth: 345,minHeight:90,minWidth:250,backgroundColor:'#e5e6e7'}}>
    <img style={{height:'60px',width:'60px'}} src='https://cdn-icons-png.flaticon.com/128/4926/4926624.png'></img>
    <a href = "https://github.com/Bharathiraja2207"target="_blank"><Button sx={{minWidth:"250px"}} variant="contained" color="primary">github</Button></a>
    </Card> 
    
  </div>
    </div>
  )
}
function Footer() {

  return (
    <div >
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">© 2023 Bharathi Raja, Inc</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    </ul>
  </footer>
    </div>
  )
}