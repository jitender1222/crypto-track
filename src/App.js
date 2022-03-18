import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./component/Header";
import Coin from "./pages/Coin";
import Homepage from "./pages/Homepage";
import {makeStyles} from "@material-ui/core";
function App() {
  const useStyles= makeStyles(()=>({
    App:{
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh',
    },
  }))
  const classes=useStyles()
  return (
    <div className="App">
     <BrowserRouter>
       <div className={classes.App}>
         <Header />
         <Route path='/' component={Homepage} exact/>
         <Route path='/coin:id' component={Coin} />
       </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
