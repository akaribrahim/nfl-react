import React from 'react';
import {makeStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, Input, MenuItem, FormControl} from '@material-ui/core'
import {GiAmericanFootballHelmet} from 'react-icons/gi';
import Select from 'react-select';
import data from './players.json';


const getPlayers = () => {
  var playerOptions = []
  const newData = data.rows.map((row)=>{
    let newPlayer = {
      value: row[2],
      label: row[2]
    }
    playerOptions.push(newPlayer);
  })
  return playerOptions
}

const useStyles = makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '280px'
  },
}));



export default function Helmet(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [playerOptions, setplayerOptions] = React.useState([])

  React.useEffect(()=>{
    setplayerOptions(getPlayers());
  },[])

  const handleClickOpen = (e) => {
    if(!props.isDragging) {
      props.getDialogStatus(true);
      setOpen(true);
    }
  };

  const handleClose = () => {
    props.getDialogStatus(false);
    setOpen(false);
  };
    

  return (
    <div>
      <GiAmericanFootballHelmet  onClick={handleClickOpen} id="helmet" style={{"fontSize":"2em", "color":"black", "cursor":"pointer"}}/>
      
      <Dialog className={classes.dialogBox} /* disableBackdropClick disableEscapeKeyDown */ open={open} onClose={handleClose}>
        <DialogTitle>Select a Player</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Select
                menuPortalTarget={document.body}
                className="basic-single"
                classNamePrefix="select"
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                name="color"
                isClearable
                options={playerOptions}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

