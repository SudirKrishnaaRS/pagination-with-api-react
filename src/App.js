import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // console.log(posts);

  // Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Slice the Array (it has 100 items)
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle Page Change
  const paginate = (pgNumber) => {
    setCurrentPage(pgNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-5">React Pagination with API (POC)</h1>
      <Posts posts={currentPosts} loading={loading} />

      {/* Pagination Component  */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* Note : paginate prop is just a callback function for child to parent */}
    </div>
  );
}

export default App;
