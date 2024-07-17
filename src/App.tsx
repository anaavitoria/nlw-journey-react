import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreatTripPage } from "./pages/creat-trip";
import { CreatDetailsPage } from "./pages/creat-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatTripPage/>,
  },
  {
  path: "/trips/:tripId",
  element: <CreatDetailsPage/>,
  },

  
]);




export function App() {
  return (
    <RouterProvider router={router} />
  )
}