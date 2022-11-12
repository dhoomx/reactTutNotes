import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  // const blogs = props.blogs;
  // const { id } = useParams();

  // const handelDelete = () => {
  //   fetch("http://localhost:8000/blogs/" + id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     Navigate("/");
  //   });
  // };

  // const navigate = useNavigate();
  // const { id } = useParams();

  // const handelDelete = () => {
  //   fetch("http://localhost:8000/blogs/" + id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     navigate("/");
  //   });
  // };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.body}</h2>
            <p>Written by {blog.aouther}</p>
          </Link>
          <button className="button">Delete</button>
          {/* <button onClick={()=> handleDelte(blog.id)}>Delte</button> */}
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;
