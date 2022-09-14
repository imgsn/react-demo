import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VS2ZV4JMQZqbqv9ra3_5R8JMJWTEbOBGPRsE8wI1aznSXYDXG5eWpPJY9LZB-rtZIQceHao4xJbXG0vb-2jB8w9U3d26FyYXZUKFWZ6QR_3mwot3-bUyPBJZh1l2XnYx",
  },
});
