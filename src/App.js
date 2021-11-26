import {CircularProgress, createTheme, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import DecentralizedVideo from "./abis/DecentralizedVideo.json";
import {Header, CurrentVideo, VideoForm, DVideo} from "./components";
import Web3 from "web3";
import {useEffect, useState} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126"
        },
        secondary: {
            main: "#f83245",
            light: "#f8324526"
        },
        background: {
            default: "#f4f5fd"
        }
    }
});

const App = () => {
    const [videoCount, setVideoCount] = useState(0);
    const [buffer, setBuffer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [account, setAccount] = useState("");
    const [decentralizedVideo, setDecentralizedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [currentHash, setCurrentHash] = useState(null);
    const [currentTitle, setCurrentTitle] = useState(null);
    useEffect(() => {
        const initWeb3 = async () => {
            await loadWeb3();
            await loadBlockchainData();
        }
        initWeb3().catch(error => console.error(error));
    }, []);
    /* Connecting the Browser with MetaMask Extension to the Blockchain based Website */
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert("Non-Ethereum Browser detected. You should using the MetaMask Extension");
        }
    }
    const loadBlockchainData = async () => {
        const web3 = window.web3;
        /* Load all Accounts from Wallet */
        const accounts = await web3.eth.getAccounts();
        /* Adding first Account to the State */
        setAccount(accounts[0]);
        /* Getting the connected Network from the Wallet */
        const networkId = await web3.eth.net.getId();
        /* Getting the Network Data from the ABI */
        const networkData = DecentralizedVideo.networks[networkId];
        /* Checking if Network exists */
        if (networkData) {
            /* JavaScript Version of the Smart Contract */
            const dVideo = new web3.eth.Contract(DecentralizedVideo.abi, DecentralizedVideo.networks[networkId].address);
            const dVideoCount = await dVideo.methods.videoCount().call();
            /* Loading Videos and sort them by Newest */
            for (let i = dVideoCount; i >= 1; i--) {
                let video = await dVideo.methods.videos(i).call();
                setVideos([...videos, video]);
            }
            /* Setting latest Video with Title to View as Default */
            const latestVideo = await dVideo.methods.videos(dVideoCount).call();
            /* Updating the State */
            setDecentralizedVideo(dVideo);
            setVideoCount(dVideoCount);
            setCurrentHash(latestVideo.hash);
            setCurrentTitle(latestVideo.title);
            setLoading(false);
        } else {
            window.alert("Smart Contract DVideo is not deployed to detected Network");
        }
    }
    /* Getting the Video and converting it to a Buffer Object (to process it on IPFS) */
    const captureFile = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setBuffer(Buffer(reader.result));
        }
    }
    /* Uploading the Video to IPFS */
    /* Video is available on IPFS on the following Link: https://ipfs.infura.io/ipfs/xxx */
    const uploadVideo = async (title) => {
        /* Declaring IPFS */
        const {create} = require("ipfs-http-client");
        /* Leaving out the Arguments will default to these Values */
        const ipfsClient = create({
            host: "ipfs.infura.io",
            port: "5001",
            protocol: "https"
        });
        const response = await ipfsClient.add(buffer);
        setLoading(true);
        await decentralizedVideo.methods.uploadVideo(response.path, title)
            /* Send Transaction from current Account */
            .send({from: account})
            /* Waiting until Feedback from Transaction */
            .on("transactionHash", (hash) => {
                /* Changing the Videos on the Website */
                setCurrentHash(hash);
                setCurrentTitle(title);
                setLoading(false);
            });
    }
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Header account={account}/>
                {
                    loading ? (
                        <Grid item><CircularProgress/></Grid>
                    ) : (
                        <Grid container direction={"column"}>
                            <VideoForm captureFile={captureFile} uploadVideo={uploadVideo}/>
                            {
                                (currentTitle && currentHash) && (
                                    <CurrentVideo currentTitle={currentTitle} currentHash={currentHash}/>
                                )
                            }
                            <Grid container>
                                {
                                    videos?.map((video, index) => {
                                        return (
                                            <DVideo video={video} key={index}/>
                                        );
                                    })
                                }
                            </Grid>
                        </Grid>
                    )
                }
            </Grid>
            <CssBaseline/>
        </ThemeProvider>
    );
}

export default App;