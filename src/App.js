//import logo from './logo.svg';
import './App.css';

import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import AccessTime from "@material-ui/icons/AccessTime";
import NotificationsActive from "@material-ui/icons/NotificationsActive";
import Settings from "@material-ui/icons/Settings";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';

// core components
import Grid from "@material-ui/core/Grid";
import GridItem from "./components/Grid/GridItem.js";
import GridContainer from "./components/Grid/GridContainer.js";
import Danger from "./components/Typography/Danger.js";
import Card from '@material-ui/core/Card';
import CardHeader from "./components/Card/CardHeader.js";
import CardIcon from "./components/Card/CardIcon.js";
import CardBody from "./components/Card/CardBody.js";
import CardFooter from "./components/Card/CardFooter.js";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {
  dailySalesChart,
  //emailsSubscriptionChart,
  completedTasksChart
} from "./variables/charts.js";

const useStyles = makeStyles({ root: {
  '&:hover': {
    backgroundColor: 'transparent',
  },
},
icon: {
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '$root.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
},
checkedIcon: {
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
},
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function App() {

  
  const [value, setValue] = React.useState('6 Sigma');

  const handleChange = (event) => {
    setValue(event.target.value);
    //axios
    //.post('https://webhook.site/a2a97a14-e280-4e25-afb5-87d890278f90',event.target.value)
    //.then(response=>{
    //  console.log(response)
    //})
    //.catch(error=>{
      //console.log(error)})
  };

  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false); //tag1

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false); //tag2

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = React.useState(false); //tag3

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const [open4, setOpen4] = React.useState(false); //tag4

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  const [open5, setOpen5] = React.useState(false); //tag5

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };

  const [open6, setOpen6] = React.useState(false); //tag6

  const handleClickOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
  };

  const [open7, setOpen7] = React.useState(false); //tag7

  const handleClickOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };

  const [open8, setOpen8] = React.useState(false); //tag8

  const handleClickOpen8 = () => {
    setOpen8(true);
  };

  const handleClose8 = () => {
    setOpen8(false);
  };

  const [open9, setOpen9] = React.useState(false); //tag9

  const handleClickOpen9 = () => {
    setOpen9(true);
  };

  const handleClose9 = () => {
    setOpen9(false);
  };

  const [open10, setOpen10] = React.useState(false); //tag10

  const handleClickOpen10 = () => {
    setOpen10(true);
  };

  const handleClose10 = () => {
    setOpen10(false);
  };

  return (
    <div>

    <Grid container spacing={1} justify="center">
 
       <Grid item sm >
 
       <GridContainer>
 
         <GridItem xs={12} sm={1} md={6} >
           <Card variant="outlined">
             <CardHeader color="warning" stats icon>
               <CardIcon color="warning">
               <Settings />
               </CardIcon>
               <p className={classes.cardCategory} style={{color: "black"}}>Operating Condition</p>
               <h3 className={classes.cardTitle} style={{color: "green"}}>
                 Online<small></small>
               </h3>
             </CardHeader>
             <CardFooter stats>
             <div className={classes.stats}>
                 <DateRange />
                 Last 24 Hours
               </div>
             </CardFooter>
           </Card>
         </GridItem>
         <GridItem xs={12} sm={1} md={6}>
           <Card>
             <CardHeader color="success" stats icon>
               <CardIcon color="success">
                 <Icon className="fa fa-plus-circle" />
               </CardIcon>
               <p className={classes.cardCategory} style={{color: "black"}}>Health Status</p>
               <h3 className={classes.cardTitle} style={{color: "red"}}>Alarm</h3>
             </CardHeader>
             <CardFooter stats>
             <div className={classes.stats}>
                 <Danger>
                   <NotificationsActive />
                 </Danger>
                 <a href="#pablo" onClick={e => e.preventDefault()}>
                   Take Action
                 </a>
               </div>
 
             </CardFooter>
           </Card>
         </GridItem>
         </GridContainer>
         <GridContainer>
 
         <GridItem xs={6} sm={1} md={6}>
           <Card>
             <CardHeader color="danger" stats icon>
               <CardIcon color="danger">
                 <VerifiedUser/>
               </CardIcon>
               <p className={classes.cardCategory} style={{color: "black"}}>Confidence Level</p>
               <h3 className={classes.cardTitle}>95%</h3>
             </CardHeader>
             <CardFooter stats>
               <div className={classes.stats}>
                 <LocalOffer />
                 Auto-defined
 
               </div>
             </CardFooter>
           </Card>
         </GridItem>
 
 
         </GridContainer>
 
         </Grid>            
 
       <Grid item sm justify="center">
 
         <GridItem xs={12} sm={12} md={12}>
           <Card chart>
             <CardHeader color="danger">
 
               <ChartistGraph
                 className="ct-chart"
                 data={dailySalesChart.data}
                 type="Line"
                 options={dailySalesChart.options}
                 listener={dailySalesChart.animation}
                 color= "black"
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Overall Chart</h4>
               <FormControl component="fieldset">
               <FormLabel component="legend">Confidence level</FormLabel>
               <RadioGroup aria-label="Sigma" name="sigma1" value={value} onChange={handleChange}>
                 <FormControlLabel value="6 Sigma" control={<StyledRadio />} label="6 Sigma" />
                 <FormControlLabel value="5 Sigma" control={<StyledRadio />} label="5 Sigma" />
                 <FormControlLabel value="4 Sigma" control={<StyledRadio />} label="4 Sigma" />
                 <FormControlLabel value="3 Sigma" control={<StyledRadio />} label="3 Sigma" />
               </RadioGroup>
             </FormControl>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
       </Grid>
 
   </Grid>
 
   <Divider variant="middle" />
           
   <Grid container spacing={2} justify="center">
     <Grid item sm md={6}>
 
     <GridContainer >
 
     <GridItem xs={6} sm={1} md={12}>
         <Card>
             <CardHeader  color="info">
               <h4 className={classes.cardTitleWhite}>Group</h4><i></i>
               <i></i>
               <p className={classes.cardCategoryBlack}>
 
               <i></i><Chip size="small" label="Tag" color="primary" /> : Active <i></i> | <i></i> 
                 <Chip size="small" label="Tag" color="secondary" />: Inactive
 
 
               </p>
 
             </CardHeader>
             <CardBody>
 
             <List>
               <ListItem>
                 <ListItemText primary="Group 1" />
 
                 <Chip size="small" label="Tag 1" color="primary" onClick={handleClickOpen1}/>
                 <Dialog
                   open={open1}
                   onClose={handleClose1}
                   aria-labelledby="draggable-dialog-title-1"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-1">
                     Tag 1
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 1</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose1} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
                 <div>
 
                 <Chip size="small" label="Tag 2" color="secondary" onClick={handleClickOpen2}/>
                 <Dialog
                   open={open2}
                   onClose={handleClose2}
                   aria-labelledby="draggable-dialog-title-2"
 
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-2">
                     Tag 2
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                     <CardHeader color="success">
                       <ChartistGraph
                         className="ct-chart"
                         data={dailySalesChart.data}
                         type="Line"
                         options={dailySalesChart.options}
                         listener={dailySalesChart.animation}
                       />
                     </CardHeader>
                     <CardBody>
                     <h4 className={classes.cardTitle}>Group 1</h4>
 
                     </CardBody>
                   </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose2} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
                 </div>
               </ListItem>
               <Divider component="li" />
               <ListItem>
               <ListItemText primary="Group 2" />
               <Chip size="small" label="Tag 3" color="primary" onClick={handleClickOpen3}/>
                 <Dialog
                   open={open3}
                   onClose={handleClose3}
                   aria-labelledby="draggable-dialog-title-3"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-3">
                     Tag 3
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 2</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose3} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
                 <Chip size="small" label="Tag 4" color="primary" onClick={handleClickOpen4}/>
                 <Dialog
                   open={open4}
                   onClose={handleClose4}
                   aria-labelledby="draggable-dialog-title-4"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-4">
                     Tag 4
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 2</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose4} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
 
               </ListItem>
               <Divider component="li"  />
               <ListItem>
               <ListItemText primary="Group 3" />
               <Chip size="small" label="Tag 5" color="primary" onClick={handleClickOpen5}/>
                 <Dialog
                   open={open5}
                   onClose={handleClose5}
                   aria-labelledby="draggable-dialog-title-5"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-5">
                     Tag 5
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 3</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose5} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
                 <div>
                 <Chip size="small" label="Tag 6" color="secondary" onClick={handleClickOpen6}/>
                 <Dialog
                   open={open6}
                   onClose={handleClose6}
                   aria-labelledby="draggable-dialog-title-6"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-6">
                     Tag 6
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 3</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose6} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
                 </div>
 
               </ListItem>
               <Divider component="li"  />
               <ListItem>
               <ListItemText primary="Group 4" />
 
               <div>
 
                   <Chip size="small" label="Tag 7" color="secondary" onClick={handleClickOpen7}/>
                   <Dialog
                     open={open7}
                     onClose={handleClose7}
                     aria-labelledby="draggable-dialog-title-7"
 
                   >
                     <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-7">
                       Tag 7
                     </DialogTitle>
                     <DialogContent>
                     <Card chart>
                       <CardHeader color="success">
                         <ChartistGraph
                           className="ct-chart"
                           data={dailySalesChart.data}
                           type="Line"
                           options={dailySalesChart.options}
                           listener={dailySalesChart.animation}
                         />
                       </CardHeader>
                       <CardBody>
                       <h4 className={classes.cardTitle}>Group 4</h4>
                       </CardBody>
                     </Card>
                     </DialogContent>
                     <DialogActions>
                       <Button autoFocus onClick={handleClose7} color="primary">
                         Cancel
                       </Button>
                     </DialogActions>
                   </Dialog>
 
                   </div>
 
               <Chip size="small" label="Tag 8" color="primary" onClick={handleClickOpen8}/>
                 <Dialog
                   open={open8}
                   onClose={handleClose8}
                   aria-labelledby="draggable-dialog-title-8"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-8">
                     Tag 8
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 4</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose8} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
               </ListItem>
               <Divider component="li"  />
               <ListItem>
               <ListItemText primary="Group 5" />
               <Chip size="small" label="Tag 9" color="primary" onClick={handleClickOpen9}/>
                 <Dialog
                   open={open9}
                   onClose={handleClose9}
                   aria-labelledby="draggable-dialog-title-9"
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-9">
                     Tag 9
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                       <CardHeader color="danger">
                           <ChartistGraph
                             className="ct-chart"
                             data={completedTasksChart.data}
                             type="Line"
                             options={completedTasksChart.options}
                             listener={completedTasksChart.animation}
                           />
                         </CardHeader>
                         <CardBody>
                           <h4 className={classes.cardTitle}>Group 5</h4>
                         </CardBody>
                       </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose9} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
                 <div>
 
                 <Chip size="small" label="Tag 10" color="secondary" onClick={handleClickOpen10}/>
                 <Dialog
                   open={open10}
                   onClose={handleClose10}
                   aria-labelledby="draggable-dialog-title-2"
 
                 >
                   <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title-10">
                     Tag 10
                   </DialogTitle>
                   <DialogContent>
                   <Card chart>
                     <CardHeader color="success">
                       <ChartistGraph
                         className="ct-chart"
                         data={dailySalesChart.data}
                         type="Line"
                         options={dailySalesChart.options}
                         listener={dailySalesChart.animation}
                       />
                     </CardHeader>
                     <CardBody>
                     <h4 className={classes.cardTitle}>Group 5</h4>
 
                     </CardBody>
                   </Card>
                   </DialogContent>
                   <DialogActions>
                     <Button autoFocus onClick={handleClose10} color="primary">
                       Cancel
                     </Button>
                   </DialogActions>
                 </Dialog>
 
                 </div>
 
               </ListItem>
               </List>
 
 
             </CardBody>
           </Card>
      </GridItem>
     </GridContainer>
 
     <GridContainer >
 
 <GridItem xs={6} sm={1} md={12}>
     <Card>
         <CardHeader  color="info">
           <h4 className={classes.cardTitleWhite}>Type of Anomaly Detection</h4>
 
         </CardHeader>
         <CardBody>
         <li>PTAftJournalBearingTemp</li>
         <li>Compressorsuctionpressure</li>
         <li>GGDiffPressureInletAir</li>
         <li>GGVibrationVelocity1</li>
         </CardBody>
       </Card>
  </GridItem>
 </GridContainer>
 
     </Grid>
 
     <Grid item sm >
     <GridContainer justify="center">
     <GridItem xs={12} sm={10} md={11} justify="center">
           <Card chart>
           <CardHeader color="warning">
               <ChartistGraph
                 className="ct-chart"
                 data={completedTasksChart.data}
                 type="Line"
                 options={completedTasksChart.options}
                 listener={completedTasksChart.animation}
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Group 1</h4>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
 
         </GridContainer>
 
         <GridContainer justify="center">
 
     <GridItem xs={12} sm={10} md={11} justify="center">
           <Card chart>
           <CardHeader color="warning">
               <ChartistGraph
                 className="ct-chart"
                 data={completedTasksChart.data}
                 type="Line"
                 options={completedTasksChart.options}
                 listener={completedTasksChart.animation}
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Group 2</h4>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
     </GridContainer>
 
     <GridContainer justify="center">
     <GridItem xs={12} sm={10} md={11} justify="center">
           <Card chart>
           <CardHeader color="warning">
               <ChartistGraph
                 className="ct-chart"
                 data={completedTasksChart.data}
                 type="Line"
                 options={completedTasksChart.options}
                 listener={completedTasksChart.animation}
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Group 3</h4>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
         </GridContainer>
 
 <GridContainer justify="center">
     <GridItem xs={12} sm={10} md={11} justify="center">
           <Card chart>
           <CardHeader color="warning">
               <ChartistGraph
                 className="ct-chart"
                 data={completedTasksChart.data}
                 type="Line"
                 options={completedTasksChart.options}
                 listener={completedTasksChart.animation}
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Group 4</h4>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
     </GridContainer>
     <GridContainer justify="center">
     <GridItem xs={12} sm={10} md={11} justify="center">
           <Card chart>
           <CardHeader color="warning">
               <ChartistGraph
                 className="ct-chart"
                 data={completedTasksChart.data}
                 type="Line"
                 options={completedTasksChart.options}
                 listener={completedTasksChart.animation}
               />
             </CardHeader>
             <CardBody>
               <h4 className={classes.cardTitle}>Group 5</h4>
             </CardBody>
             <CardFooter chart>
               <div className={classes.stats}>
                 <AccessTime /> updated 4 minutes ago
               </div>
             </CardFooter>
           </Card>
         </GridItem>
 
     </GridContainer>
     </Grid>
 
   </Grid>
 
   <TextField id="standard-basic" label="Standard" />
       if(standard-basic==1){
 
           <div>online</div>
         
 
       }
       else{
       }
 
     </div>
  );
}

export default App;
