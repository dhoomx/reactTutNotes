import { Link } from "react-router-dom";

// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

import { useSelector, useDispatch } from "react-redux";

import { actions } from "../store/index";

function Home() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrFn = () => {
    dispatch(actions.increment());
  };

  const dicrFn = () => {
    dispatch(actions.decrement());
  };

  const addByFn = () => {
    dispatch(actions.addBy(50));
  };

  // const incrFn = () => {
  //   dispatch({ type: "Incr" });
  // };

  // const dicrFn = () => {
  //   dispatch({ type: "Dicr" });
  // };

  // const addByFn = () => {
  //   dispatch({ type: "AddBy", payload: 50 });
  // };

  // const {
  //   data: blogs,
  //   isLoading,
  //   errrr,
  // } = useFetch("http://localhost:8000/blogs");

  // const handleDelte = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };
  return (
    <div>
      <div className="content">
        {/* {errrr && <h1>{errrr}</h1>}
        {isLoading && <h1> Loading......</h1>}
        {blogs && <h2>App content</h2>} */}
      </div>
      {/* {blogs && <BlogList blogs={blogs} />} */}
      <Link to={"/about"}>
        <button>AboutPage</button>
      </Link>

      <h1>Counter Colco</h1>
      <h2>{counter}</h2>

      <button onClick={incrFn}>Increment</button>
      <button onClick={dicrFn}>Decrement</button>
      <button onClick={addByFn}>Add by 50</button>
    </div>
  );
}

export default Home;
