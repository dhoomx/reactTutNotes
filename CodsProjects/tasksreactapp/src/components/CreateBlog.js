import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const submitBlogToTheServer = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
      isPending,
    };
    setIsPending(true);
    console.log(blog);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        console.log("New blog Added 👍");
        navigate("/");
      });
    }, 1000);
  };
  return (
    <div className="create">
      <h2>Create New Blog</h2>
      <form onSubmit={submitBlogToTheServer}>
        <label className="label">
          Tilte
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            type="text"
          />
        </label>
        <label className="label">
          Name
          <input
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>Blog author:</label>
        <select
          className="select"
          value={author}
          required
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Abood">Abood</option>
          <option value="Khaled">Khaled</option>
        </select>
        <label>Blog body:</label>
        <textarea
          className="textarea"
          value={body}
          required
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        {!isPending && <button className="button">Send</button>}
        {isPending && (
          <button disabled className="button">
            {" "}
            adding...
          </button>
        )}
      </form>

      <h3>{title}</h3>
      <h3>{name}</h3>
      <h3>{author}</h3>
      <h3>{body}</h3>
    </div>
  );
}

export default CreateBlog;
