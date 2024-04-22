import React, { useState, useEffect } from "react";
import InstagramAPI from "../../../services/InstagramAPI";

const InstagramPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const posts = await InstagramAPI();
        setInstagramPosts(posts);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {instagramPosts.map(post => (
          <div key={post.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={post.media_url}
              alt={post.caption}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InstagramPosts;


