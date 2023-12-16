import HomeLayout from "../layouts/HomeLayout";
import AboutLayout from "../layouts/AboutLayout";
const mainRoutes = [
  { path: "/", element: <HomeLayout /> },
  {
    path: "/about",
    element: <AboutLayout />,
  },
];
export { mainRoutes };
