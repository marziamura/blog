import React from "react"
import FormControl from '@material-ui/core/FormControl';

import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import {RiSendPlane2Line} from "react-icons/ri";
import Layout from "../components/layout";
import TextField from '@material-ui/core/TextField';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { navigate } from "gatsby";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
 
  divider:{
    padding: 30
  },
  box:{
    justifyContent: "center",
    alignItems:"center",
    alignContent: "center",
    backgroundColor:"primary"
  }
}));


const Contact = () => {

  const [email, setEmail]= React.useState("");
  const [name, setName]= React.useState("");
  
  const classes = useStyles()
  function subscribe(value){
    console.log("Subscribe", value, email);
    const values ={
      FNAME: name
    }
    addToMailchimp(email, values).then(
      navigate("/thanksSubscription/")
    ).catch((error)=>console.log("error subscribing to mailing list", error));
  }
  function onChangeName(event){
    setName(event.target.value);
  }
  function onChangeEmail(event){
    setEmail(event.target.value);
  }
  return  (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Box className={classes.box}>
      <div className="wrapper">
      <FormControl onSubmit={()=>subscribe()}>
      <TextField required id="name" label="Name" onChange={(event)=>onChangeName(event)} />
      <div className={classes.divider}/>
      <TextField required id="email" label="Email" onChange={(event)=>onChangeEmail(event)} defaultValue="" />
        
      <FormHelperText id="my-helper-text">I'll never share your email with anybody else.</FormHelperText>
        <p className="text-align-right">
            <button className="button"    
            onClick={()=>subscribe()}        
            sx={{
              variant: 'links.button'
            }} type="submit">Subscribe <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
      </FormControl>
     
      </div>
    </Box>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage:{
    "input":{
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    },
    "textarea": {
      border:"6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground"
    }
  }
}