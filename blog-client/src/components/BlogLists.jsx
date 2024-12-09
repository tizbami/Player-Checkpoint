import BlogCard from "./BlogCard";
import { useState } from "react";
import { useEffect } from "react";

const BlogLists = (body, title) => {
  const style = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      padding: "10px",
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  //write a funtion using fetch api

  const fetchData = async () => {
    setLoading(true);

    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setBlogs(data);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Blog Lists</h2>
      {loading && <p>Loading...</p>}
      <div style={style.grid}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} body={blog.body} />
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
