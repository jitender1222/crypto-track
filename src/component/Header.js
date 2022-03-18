import React from "react";
import { AppBar ,Container ,createTheme,ThemeProvider,makeStyles,MenuItem,Select,Toolbar, Typography } from "@material-ui/core";
import {useHistory} from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const styles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:'pointer',
    },
}))
const Header=()=>{
    const history=useHistory();
    const classes=styles();

    const {currency,setcurrency}=CryptoState()
    const darkTheme=createTheme({
        palette:{
            primary:{
                main:"#ffff",
            },
            type:"dark",
        },
    })
    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position="static" >
        <Container>
        <Toolbar>
            <Typography onClick={()=>history.push('/')} className={classes.title} variant='h6'>
                Crypto Hunter
            </Typography>
            <Select 
            variant="outlined"
            style={{
                width:100,
                height:40,
                marginRight:15,
            }}
            value={currency}
            onChange={(e)=>setcurrency(e.target.value)}
            >
                <MenuItem value='{USD}'>USD</MenuItem>
                <MenuItem value='{IND}'>IND</MenuItem>
            </Select>
        </Toolbar>
        </Container>
        </AppBar>
        </ThemeProvider>
    )
}
export default Header;