import ReactPlayer from "react-player";
import {Grid, Typography} from "@material-ui/core";

const DVideo = ({video, index}) => {
    return (
        <Grid item key={index}>
            <Typography variant={"subtitle1"}>{video.title}</Typography>
            <ReactPlayer
                url={`https://ipfs.infura.io/ipfs/${video.hash}`}
                playing={false}
                width={"350px"}
                controls={true}
                muted={true}
                loop={true}
            />
        </Grid>
    );
}

export default DVideo;