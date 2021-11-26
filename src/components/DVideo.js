import ReactPlayer from "react-player";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        padding: theme.spacing(2)
    }
}));

const DVideo = ({video, index}) => {
    const classes = useStyles();
    return (
        <Grid item key={index}>
            <Paper className={classes.paper}>
                <Typography variant={"subtitle1"}>{video.title}</Typography>
                <ReactPlayer
                    url={`https://ipfs.infura.io/ipfs/${video.hash}`}
                    playing={false}
                    width={"350px"}
                    controls={true}
                    muted={true}
                    loop={true}
                    style={{margin: "0 auto"}}
                />
            </Paper>
        </Grid>
    );
}

export default DVideo;