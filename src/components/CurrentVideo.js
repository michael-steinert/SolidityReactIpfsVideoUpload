import ReactPlayer from "react-player";
import {Box, Typography} from "@material-ui/core";

const CurrentVideo = ({currentTitle, currentHash}) => {
    return (
        <Box>
            <Typography variant="h3">{currentTitle}</Typography>
            {console.log(`https://ipfs.infura.io/ipfs/${currentHash}`)}
            <ReactPlayer
                url={`https://ipfs.infura.io/ipfs/${currentHash}`}
                width={"150px"}
                playing={true}
                muted={true}
                loop={true}
            />
        </Box>
    );
}

export default CurrentVideo;