import ImageKit from "imagekit";

var imagekit = new ImageKit({
    publicKey : process.env.IMAGE_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

export default imagekit;