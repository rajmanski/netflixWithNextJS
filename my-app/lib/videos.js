export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`;
  console.log(url);

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data.items.map((item) => {
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: item?.id?.videoId || item?.id?.channelId,
      };
    });
  } catch (error) {
    console.log("Something went wrong with fetching the data: ", error);
    return [];
  }
};
