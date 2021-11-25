import ReactPlayer from "react-player";
import {Grid, Typography} from "@material-ui/core";

const CurrentVideo = ({currentTitle, currentHash}) => {
    return (
        <Grid>
            <Typography variant="h3">{currentTitle}</Typography>
            <ReactPlayer
                url={`https://ipfs.infura.io/ipfs/${currentHash}`}
                width={"150px"}
                playing={true}
                muted={true}
                loop={true}
            />
        </Grid>
    );
}

export default CurrentVideo;