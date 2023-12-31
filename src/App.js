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
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {

    // Api call to fetch all the posts using Axios
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
    if (pgNumber !== currentPage) {
      // To scroll to top of the page when the navigating to a different page
      window.scrollTo(0, 0);
      setCurrentPage(pgNumber);
    }
  };

  // Handle Previous Button Click
  const handlePrevious = () => {
    if (currentPage > 1) {
      console.log("Previous Button Clicked");
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      console.log("Next Button Clicked");
      setCurrentPage(currentPage + 1);
    }
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
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      {/* Note : paginate prop is just a callback function for child to parent */}
    </div>
  );
}

export default App;
