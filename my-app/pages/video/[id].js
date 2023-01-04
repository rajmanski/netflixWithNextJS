import { useRouter } from "next/router";

const Video = () => {

    const router = useRouter();

    return (
        <div>Video {router.query.id}</div>
    )
}


export default Video;