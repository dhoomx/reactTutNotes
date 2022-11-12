//Hooks

//What are React.js Hooks?
/*
   * Hooks are a new addition in React 16.8. They let you use state and other React features without 
     writing a class…A 
   * hook is a special function that lets you “hook into” React features.

* 1- "useState"

const [name, setName] = useState("Abood");

    console.lgo(name);
    clikeFun(()=> setName("Khaled"));

OutPut:
  Abood
  if we click
  abood -> Khaled

/*

* 2 - "useEffect";

! const [name, setName] = useState("Abood");
! 
! // useEffect(()=>{
! 
! // },[name]);
! 
! useEffect(() => {
!   console.log("useEffect has been ran");
!   console.log(name);
! }, [name]);

*/
/* 
??///////////////////////////////////////////////////////////////////
*/

/*

  * it's run one time when the appliction is run and then it run every time when the elements that
    we change "we have to change which element to run with"
  * it is free usfull when we want to fitch data.
  * 

*To Fitch data from server 👇🏻

*      npx json-server --watch db.json --port 8000

///////////////
* Step 1
   ! const [blogs, setBlogs] = useState(null);

* Step 2
   ! useEffect(()=>{
   ! fetch('http://localhost:8000/blogs')
   ! .then(res =>{
   !   return res.json();
   ! })
   ! .then(data =>{
   !   setBlogs(data);
   ! })
   ! },[]);

* Step 3
   ! {blogs && <BlogList blogs={blogs} handleDelte={handleDelte}/>}

/////////////
*/
/* 
??///////////////////////////////////////////////////////////////////
*/

// Error Handling when we fitch data from server

/*
* Step1
 ! const [errrr, setErrrr] = useState(null);

* Step2
 ! .then((res) => {
 !         console.log(res);
 !         if (!res.ok) {
 !           throw Error(
 !             "Sorrey could not fetch data please check your http Url Thx 🙏"
 !           );
 !         }
 !         return res.json();
 !       })
 !.then((data) => {
 !         //////////////
 !         //////////////
 !         //////////////
 !       })
 ! .catch((err) => {
 !         setErrrr(err.message);
 !         setIsLoading(false);
 !       });

* Step3
 ! .then((data) => {
 !         setBlogs(data);
 !         setIsLoading(false);
 !         setErrrr(null);
 !       })

* Step4
 ! return (
    <div>
      <div className="content">
 !      {errrr && <h1>{errrr}</h1>}
        {isLoading && <h1> Loading......</h1>}
        {blogs && <h2>App content</h2>}
      </div>
      {blogs && <BlogList blogs={blogs} handleDelte={handleDelte} />}
    </div>
  );
*/
/* 
??///////////////////////////////////////////////////////////////////
*/

/*
*Router & link

*Step1
? inside App.js
  ! import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

*Step2
  function App() {
    return (
  !1   <Router>
        <div className="APP">
  !2       <Routes>
  !3         <Route exact path="/" element={<Home />} />
  !3         <Route exact path="/about" element={<About />} />
  !2       </Routes>
        </div>
  !1   </Router>
    );
  }

*Step3
 ? if we want a "btn or h1 etc" to link us to anouther page we have to do 👇🏻
 inside the page that we want
  ! import { Link } from "react-router-dom";
 
 ?then
   ! <Link to={"/about"}>
   !   <button>AboutPage</button>
   ! </Link>


*Link elements to it's page like to a spisifc product details 👇🏻
step1
create the detail bage for the product or the element that you want
step2 add the useParams hook inside the detail page like this 

   

   ! import { useParams } from "react-router-dom";
   
   ! function BlogDetails() {
               id
   !   const { id } = useParams(); 
                                                                                       id
   !   const {data: blogs,isLoading,errrr} = useFetch("http://localhost:8000/blogs/" + id);

   !   return <div>BlogDetails 
   
      ! <div>
      !    BlogDetails
      !    <div>
      !      {isLoading && <h1>Loading....</h1>}
      !      {errrr && { errrr }}
      !      {blogs && <h2>{blogs.body}</h2>}
      !    </div>
      !  </div>

   ! }
   ! 
   ! export default BlogDetails;

step3 
?inside the App.js add the route for the detail page and the path with the "id" pram

   function App() {
     return (
       <Router>
         <div className="content">
           <Navbar />
   
           <div className="APP">
             <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/about" element={<About />} />
      !         <Route exact path="/blogs/:id" element={<BlogDetails />} />
             </Routes>
           </div>
         </div>
       </Router>
     );
   }

step4
inside the list Page or the list of the things that you want add add the "Link" around the element 
with the route and the "list.id" for example here is "blog.id" and the id will help as to move
to the spicfic element.

 !  import { Link } from "react-router-dom";
  
  function BlogList({ blogs, handleDelte }) {
    // const blogs = props.blogs;
  
    return (
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
    !       <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.body}</h2>
              <p>Written by {blog.aouther}</p>
    !       </Link>
            </div>
            ))}
          </div>
        );
      }



      
  
*/
/* 
??///////////////////////////////////////////////////////////////////
*/

/*
*Redux & Redux ToolKit 

?   1-.........Redux.........   ?

Step1
instal    1        2
! npm i redux react-redux

Step2
  * Create a folder calld Store
  * Inside Store folder create a file called index.js or store.js
  * import {CreateStore} from "redux"
  * create a function for the reducers 
  * and then create a const called "const store = createStore(reducerFn);"
  
? Store => "store.js"

        ! import { createStore } from "redux";
        ! 
        ! const reducerFn = (state = { counter: 10 }, action) => {
        !   if (action.type === "Incr") {
        !     return { counter: (state.counter += 10) };
        !   }
        ! 
        !   if (action.type === "Dicr") {
        !     return { counter: (state.counter -= 10) };
        !   }
                  ?"this one With payload"
        !   if (action.type === "AddBy") {
                                                        "payload"
        !       return { counter: state.counter + action.payload };
        !    }   
        !   return state;
        ! };
        ! 
        ! const store = createStore(reducerFn);
        ! 
        ! export default store;

Step3
    * go to the main file of the appliction "index.js"
    * inside the main file of the appliction "index.js" import 
    *     1- import { Provider } from "react-redux"; 
    *     2- import store from "./store";
    * and then let <Provider store={store}>👇🏻
   
        ! import { Provider } from "react-redux";
        ! import store from "./store";
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(
            // <React.StrictMode>
        !   <Provider store={store}>
        !     <App />
        !   </Provider>
            // </React.StrictMode>}
        ! );

Step4 
inside any file that you want to use the state 
 for example "home.js"
    * import 
        ! import { useSelector, useDispatch } from "react-redux";
         1- useSelector : to let us to use the state that we want 
         2- useDispatch : to send / or update the state.
    * and then create btn and our function name like 👇🏻
        ! 
           function Home() {
        !   const counter = useSelector((state) => state.counter);
        !   const dispatch = useDispatch();
            
        ? Our functions 
            1-incrFn
            2-dicrFn  
            3-addByFn 👇🏻 "this one has payload"

        !   const incrFn = () => {
        !     dispatch({ type: "Incr" });
        !   };
        
        !   const dicrFn = () => {
        !     dispatch({ type: "Dicr" });
        !   };
            
        !    const addByFn = () => {
                                           👇🏻 "this one has payload"
        !      dispatch({ type: "AddBy", payload: 50 });
        !    };
         
        !   return (
        !     <div>
        !       <h1>Counter Colco</h1>
        !       <h2>{counter}</h2>
        ! 
        !       <button onClick={incrFn}>Increment</button>
        !       <button onClick={dicrFn}>Decrement</button>
        !     </div>
        !   );
        ! }
        ! 
        ! export default Home;
        !             
*/

/*
?   2-.........Redux ToolKit.........   ? 
         Redux toolKit its a lot butter than redux

Step1 
   * instal redux tool kit
        ! npm install @reduxjs/toolkit
   * inside the store folder "index.js" 

        ! import { configureStore, createSlice } from "@reduxjs/toolkit";

        ! const counterSlice = createSlice({
        !   name: "counter",
        !   initialState: { counter: 0 },
        !   reducers: {
        !     increment(state, action) {
        !       state.counter += 10;
        !     },
        !     decrement(state, action) {
        !       state.counter -= 10;
        !     },
        !     addBy(state, action) {
        !       state.counter += action.payload;
        !     },
        !   },
        ! });
        ! 
        ! export const actions = counterSlice.actions;
        ! 
        ! export const store = configureStore({
        !   reducer: counterSlice.reducer,
        ! });
        ! export default store;

Step2
    * go to the main file of the appliction "index.js"
    * inside the main file of the appliction "index.js" import 
    *     1- import { Provider } from "react-redux"; 
    *     2- import store from "./store";
    * and then let <Provider store={store}>👇🏻
   
        ! import { Provider } from "react-redux";
        ! import store from "./store";
          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(
            // <React.StrictMode>
        !   <Provider store={store}>
        !     <App />
        !   </Provider>
            // </React.StrictMode>}
        ! );

Step3
inside any file that you want to use the state 
 for example "home.js"
    * import 
        ! import { useSelector, useDispatch } from "react-redux";
        ! import { actions } from "../store/index";
        
        ! function Home() {
        !   const counter = useSelector((state) => state.counter);
        !   const dispatch = useDispatch();
        ! 

           ? Our functions 
               1-incrFn
               2-dicrFn  
               3-addByFn 👇🏻 "this one has payload"
               
        !   const incrFn = () => {
        !     dispatch(actions.increment());
        !   };
        
        !   const dicrFn = () => {
        !     dispatch(actions.decrement());
        !   };
                          👇🏻 "this one has payload"
        !   const addByFn = () => {
        !     dispatch(actions.addBy(50));
        !   };

*/

/* 
??///////////////////////////////////////////////////////////////////
*/
