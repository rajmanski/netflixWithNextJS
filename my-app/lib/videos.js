import videoData from '../data/videos.json';

export const getVideos = async () => {
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=hollywood%20movies&key=${YOUTUBE_API_KEY}`
    console.log(url)

    const response =  await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.items.map((item) => {
        return {
          title: item.snippet.title,
          imgUrl: item.snippet.thumbnails.high.url,
          id: item?.id?.videoId || item?.id?.channelId,
        };
    });
}