import ReactPlayer from "react-player";
import {Grid, Typography} from "@material-ui/core";

const CurrentVideo = ({currentTitle, currentHash}) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h2">Current Video</Typography>
            <Typography variant="h3">{currentTitle}</Typography>
            {console.log(`Currecnt Video:${currentTitle}  -  ${currentHash}`)}
            <ReactPlayer
                url={`https://ipfs.infura.io/ipfs/${currentHash}`}
                playing={true}
                muted={true}
                loop={true}
            />
        </Grid>
    );
}

export default CurrentVideo;