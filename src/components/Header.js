import Identicon from "identicon.js";
import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#fff",
    }
}));

const Header = ({account}) => {
    const classes = useStyles();
    return (
        <AppBar position={"static"} className={classes.root}>
            <Toolbar>
                <Grid container alignItems={"center"}>
                    <Grid item xs={6}>
                        <Typography variant={"subtitle2"} style={{color: "#000"}}>Your Address: {account}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {
                            account ? (
                                <>
                                    <Typography variant={"subtitle2"} style={{color: "#000"}}>Your Ienticon: </Typography>
                                    <img
                                        style={{width: "30px", height: "30px"}}
                                        /* Generating a Identicon for given Address */
                                        src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                                        alt="Identicon for given Address"
                                    />
                                </>
                            ) : (<Typography variant={"subtitle1"}>No Identicon possible for current Address</Typography>)
                        }
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;