import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blogs,
    isLoading,
    errrr,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handelDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      BlogDetails
      <div>
        {isLoading && <h1>Loading....</h1>}
        {errrr && { errrr }}
        {blogs && <h2>{blogs.body}</h2>}
      </div>
      <button className="button" onClick={handelDelete}>
        Delete
      </button>
    </div>
  );
}

export default BlogDetails;
