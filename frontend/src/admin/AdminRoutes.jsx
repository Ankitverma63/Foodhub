<<<<<<< HEAD
=======
// import { Routes, Route } from "react-router-dom";
// import AdminLayout from "./layout/AdminLayout";
// import AddItem from "./pages/AddItem";
// import ListItems from "./pages/ListItems";
// import Orders from "./pages/Orders";
// import Snowfall from "react-snowfall";

// export default function AdminRoutes() {
//   return (
//     <>
//       {/* ❄️ Snowfall only for USER */}
//       <Snowfall
//         snowflakeCount={120}
//         style={{
//           position: "fixed",
//           width: "100vw",
//           height: "100vh",
//           zIndex: 50,
//         }}
//       />
//       <Routes>
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route path="add" element={<AddItem />} />
//           <Route path="list" element={<ListItems />} />
//           <Route path="orders" element={<Orders />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import AddItem from "./pages/AddItem";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";
<<<<<<< HEAD
import Snowfall from "react-snowfall";

export default function AdminRoutes() {
  return (
    <>
      {/* ❄️ Snowfall only for USER */}
      {/* <Snowfall
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }} */}
      {/* /> */}
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add" element={<AddItem />} />
          <Route path="list" element={<ListItems />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}
=======

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="add" element={<AddItem />} />
        <Route path="list" element={<ListItems />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}
>>>>>>> afe967315c45edbf0cb11552ddd111cb8e226067
