import ReactPlayer from "react-player";
import {Box, Typography} from "@material-ui/core";

const DVideo = ({video, key}) => {
    return (
        <Box key={key} style={{width: "175px"}}>
            <Typography variant={"subtitle2"}>{video.title}</Typography>
            <ReactPlayer
                url={`https://ipfs.infura.io/ipfs/${video.hash}`}
                width={"150px"}
            />
        </Box>
    );
}

export default DVideo;