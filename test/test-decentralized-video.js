const DecentralizedVideo = artifacts.require("./DVideo.sol");

require("chai").use(require("chai-as-promised")).should();

contract("DecentralizedVideo", ([deployer, author]) => {
    let decentralizedVideo;

    before(async () => {
        decentralizedVideo = await DecentralizedVideo.deployed()
    });

    describe("Deployment", async () => {
        it("Deploys successfully", async () => {
            const address = await decentralizedVideo.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, "");
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it("Video has a name", async () => {
            const name = await decentralizedVideo.name();
            assert.equal(name, "DecentralizedVideo");
        });
    });

    describe("Videos", async () => {
        let result, videoCount;
        /* Test IPFS Hash */
        const hash = "QmNoMhVF2budZMwwt4ccUddJgTDyjXMFqyLMrSfVnQ21r9";
        const videoTitle = "Video Example Title";

        before(async () => {
            result = await decentralizedVideo.uploadVideo(hash, videoTitle, {from: author});
            videoCount = await decentralizedVideo.videoCount();
        });

        /* Checking the Event */
        it("Creates Videos", async () => {
            /* Happy Path - SUCCESS */
            assert.equal(videoCount, 1);
            const event = result.logs[0].args;
            assert.equal(event.id.toNumber(), videoCount.toNumber(), "ID is correct");
            assert.equal(event.hash, hash, "Hash is correct");
            assert.equal(event.title, "Video Example Title", "Title is correct");
            assert.equal(event.author, author, "Author is correct");

            /* Bad / Exception Paths */
            /* FAILURE: Video must have a Hash */
            await decentralizedVideo.uploadVideo("Video Title", "", {from: author}).should.be.rejected;
            /* FAILURE: Video must have Title */
            await decentralizedVideo.uploadVideo("", "Video Hash", {from: author}).should.be.rejected;
        });

        /* Checking the Struct */
        it("Lists Videos", async () => {
            const video = await decentralizedVideo.videos(videoCount);
            assert.equal(video.id.toNumber(), videoCount.toNumber(), "ID is correct");
            assert.equal(video.hash, hash, "Hash is correct");
            assert.equal(video.title, "Video Example Title", "Title is correct");
            assert.equal(video.author, author, "Author is correct");
        });
    });
});