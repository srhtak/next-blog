import axios from "axios";

function Feed() {
  const getList = async () => {
    try {
      const response = await axios.get("http://localhost/api/v1/feed-post");
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container">
      <button onClick={getList}>Get List</button>
    </div>
  );
}

export default Feed;
