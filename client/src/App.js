import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        {/* <Route path="/signin" element={<Signin />}/> */}
        {/* <Route path="/signup" element={<Signup />}/> */}
        {/* <Route path="/propertyDetail/:id" element={}/> */}
        {/* <Route path="/properties" element={<Properties />} /> */}
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
