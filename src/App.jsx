// import React from "react";
// import Header from "./Component/Header";
// import Sidebar from "./Component/Sidebar";
// import { useAuth } from "./Context/Authprovider";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
// import Search from "./Pages/Search";
// import PlayingVideo from "./Pages/PlayingVideo";
// import Loading from "./Loader/Loading";

// export default function App() {
//   const { loading } = useAuth();

//   return (
//     <>
//       <div className="bg-black h-[100vh]">
//         {loading && <Loading />}
//         <Header />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/search/:searchQuery" element={<Search />}></Route>
//             <Route path="/video/:id" element={<PlayingVideo />}></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

import React from "react";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import { useAuth } from "./Context/Authprovider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import PlayingVideo from "./Pages/PlayingVideo";
import Loading from "./Loader/Loading";

export default function App() {
  const { loading } = useAuth();

  return (
    <BrowserRouter>
      <div className="bg-black h-[100vh]">
        {loading && <Loading />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<Search />} />
          <Route path="/video/:id" element={<PlayingVideo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
