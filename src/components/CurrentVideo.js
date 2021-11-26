import ReactPlayer from "react-player";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        padding: theme.spacing(1)
    }
}));

const CurrentVideo = ({currentTitle, currentHash}) => {
    const classes = useStyles();
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <Typography variant="h4">Current Video</Typography>
                <Typography variant="h5">{currentTitle}</Typography>
                <ReactPlayer
                    url={`https://ipfs.infura.io/ipfs/${currentHash}`}
                    playing={true}
                    muted={true}
                    loop={true}
                    style={{margin: "0 auto"}}
                />
            </Paper>
        </Grid>
    );
}

export default CurrentVideo;