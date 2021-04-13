import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Layout from "../components/layout"
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {ThemeProvider} from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {createMuiTheme} from '@material-ui/core/styles';

const localTheme = createMuiTheme({
  palette: {
      primary:      {main: "#941F7A"},
      secondary:    {main: "#941F7A"},
      error:        {main: '#941F7A'},
      warning:       {main: '#941F7A'},
      info:        {main: '#941F7A'},
      background: {default: "#941F7A"},
   typography: {
        fontFamily: [
          'rosewood-std',
          'Lora'
        ].join(','),
      },
    h1:{
      fontSize: 10,
      fontWeight: 'bold',
    },
    text: {
        primary: '#2E151B',
        secondary: '#F3F5F5'
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 15,
    fontWeight: theme.typography.fontWeightRegular,
  },
  session:{
    fontSize: 30,
    fontWeight: theme.typography.fontWeightRegular,
  },
  column:{
    paddingRight: 30
  },
  titleContainer:{
    padding: 30
  },
  topHeader:{
    alignContent: "center",
    alignItems: "center",
    justify: "center",
    
    padding: 10,
    marginLeft: 10,
  },
  topBox:{
    justifyContent: "center"
  },
  topHeaderText:{
    fontSize: 40,
    alignContent: "center",
    align: "center",
    justify: "center",
    paddingLeft: 10,
    marginLeft: 10,
  }

}));


function About(){
  const classes = useStyles();

  var contentPersonal = [{
    title: "I have been living in Switzerland for nearly five years and before that, I lived in Ireland for ten years",
    content: "but my heart is always going to be where my roots are, in Sardinia."
  },
  {
  title: "I have a husband, two kids",
  content: "and a dog"
  },
  {
    title: "I also have four sisters and a brother",
    content: "and many nephews and nices. There is no day I don't think about them."
  },
  {
    title: "I love to be among friends",
    content: "and I am realizing I have more than just a few even if I don't see them every day, or even not even every year."
  },
  {
    title: "I love snowy mountains, lakes and green landscapes",
    content: "but nothing beats the smell of the salty water and the sandy beaches of the sea."
  },
  
  ] 
  
  var contentProfessional = [
  {
      title: "I love computer programming",
      content: "and I take great satisfaction to see the result of my work. It might be however extremely stressful."
  },
  { title: "I always deliver on time",
    content: "and I try to minimize wasted work by leaving all to the last possible moment."
    
  {
    title: "I worked as Scrum master and Product Owner",
    content: "and although there is great value in the Scrum framework, I believe it is flawed and it is not a silver bullet to deliver value."
  },
  {
  title: "I always say what I think",
  content: "and I hate passive aggressive behaviors."
  },
  {
    title: "I speak five languages",
    content: "Really fluently only Italian and English, but my German is improving I am around C2 level now, with Spanish I can guess and interpolate, and Sardinian is the one I really wish I could speak every day. "
  },
  {
    title: "I don't like to control",
    content: "and even less I like to be controlled"
  },
  ]




var getAccordion = (title, content) =>
{
    return  <React.Fragment>
         <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {content}
      </Typography>
    </AccordionDetails>
  </Accordion>
  </React.Fragment>
}

function getPersonalContent(){
  return <React.Fragment>
    
    {contentPersonal.map((item)=>{
       return        <Accordion>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography className={classes.heading}>{item.title}</Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography>
           {item.content}
         </Typography>
       </AccordionDetails>
     </Accordion>
    })}
    </React.Fragment>
}
function getProfessionaContent(){
  return <React.Fragment>
    
  {contentProfessional.map((item)=>{
     return        <Accordion>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
       id="panel1a-header"
     >
       <Typography className={classes.heading}>{item.title}</Typography>
     </AccordionSummary>
     <AccordionDetails>
       <Typography>
         {item.content}
       </Typography>
     </AccordionDetails>
   </Accordion>
  })}
  </React.Fragment>
}
  return	<Layout>

  <ThemeProvider theme={localTheme}>
  <Grid container spacing={0} >
   <Grid item md={12} xs={12} className={classes.topHeader}>
      <Box className={classes.topBox}>
         <Typography variant="h1" component="h1" className={classes.topHeaderText}>
            Few things about me...
         </Typography>
      </Box>
    </Grid>
    <Grid item md={6} xs={12} className={classes.column}>
      <Box className={classes.titleContainer}>
    <Typography variant="h1" component="h1" className={classes.session}>Personal</Typography>
    </Box>
     
        {getPersonalContent()}
     
   </Grid>
   <Grid item md={6} xs={12} >
   <Box className={classes.titleContainer}>
    <Typography className={classes.session}>Professional</Typography>
    </Box>
 
   {getProfessionaContent()}
      
</Grid>
</Grid>
</ThemeProvider>
</Layout>
}

export default About;