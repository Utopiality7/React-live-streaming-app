import StreamList from "../pages/streams/list";
import StreamCreate from "../pages/streams/create";
import StreamEdit from "../pages/streams/edit";
import StreamDelete from "../pages/streams/delete";
import StreamShow from "../pages/streams/show";
const routesList = [
  {
    path: "/",
    element: <StreamList />,
  },
  {
    path: "/streams/new",
    element: <StreamCreate />,
  },
  {
    path: "/streams/edit",
    element: <StreamEdit />,
  },
  {
    path: "/streams/delete",
    element: <StreamDelete />,
  },
  {
    path: "/streams/show",
    element: <StreamShow />,
  },
];

// Export the routes for use in our main app
export default routesList;
