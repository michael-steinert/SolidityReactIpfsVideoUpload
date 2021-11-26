import {useState} from "react";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: "center",
        padding: theme.spacing(2)
    }
}));

const VideoForm = ({captureFile, uploadVideo}) => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <Typography variant={"h4"}>Share Video</Typography>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    title ? uploadVideo(title) : uploadVideo("No Title");
                }}>
                    <input
                        type="file"
                        accept="video/mp4,video/x-m4v,video/*"
                        onChange={captureFile}
                        style={{width: "250px"}}
                    />
                    <input
                        id="videoTitle"
                        type="text"
                        placeholder="Video Title"
                        onChange={event => setTitle(event.target.value)}
                        required
                    />
                    <button type="submit">Upload</button>
                </form>
            </Paper>
        </Grid>
    );
}

export default VideoForm;