import StreamList from "./views/pages/streams/list";
import StreamCreate from "./views/pages/streams/create";
import StreamEdit from "./views/pages/streams/edit";
import StreamDelete from "./views/pages/streams/delete";
import StreamShow from "./views/pages/streams/show";
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
