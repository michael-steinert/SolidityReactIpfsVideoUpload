import {useState} from "react";
import {Box, Typography} from "@material-ui/core";

const VideoForm = ({captureFile, uploadVideo}) => {
    const [title, setTitle] = useState("");
    return (
        <Box>
            <Typography variant={"subtitle2"}>Share Video</Typography>
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
                    required={true}
                />
                <button type="submit">Upload</button>
            </form>
        </Box>
    );
}

export default VideoForm;