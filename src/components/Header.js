import Image from "material-ui-image";
import Identicon from "identicon.js";
import {AppBar, Box, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
                    <Grid item>
                        <Typography variant={"subtitle2"}>{account}</Typography>
                        {
                            account ? (
                                <Image
                                    imageStyle={{ width: "30px", height: "30px"}}
                                    /* Generating a Identicon for given Address */
                                    src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                                    alt="Identicon for given Address"
                                />
                            ): (<Typography variant={"subtitle1"}>No Identicon possible for current Address</Typography>)
                        }
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;