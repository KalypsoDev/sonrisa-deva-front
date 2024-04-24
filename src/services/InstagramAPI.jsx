import axios from 'axios';

const InstagramAPI = async () => {
  try {
    const accessToken = import.meta.env.VITE_INSTAGRAM_TOKEN;
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=media_url,children{media_url},caption,media_type,permalink&access_token=${accessToken}`);
    const posts = response.data.data;
    return posts;
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return [];
  }
};
export default InstagramAPI;