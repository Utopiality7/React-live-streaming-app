import { v4 as uuidv4 } from "uuid";

import StreamList from "../pages/streams/list";
import StreamCreate from "../pages/streams/create";
import StreamEdit from "../pages/streams/edit";
import StreamDelete from "../pages/streams/delete";
import StreamShow from "../pages/streams/show";
const routesList = [
  {
    path: "/",
    element: <StreamList />,
    extraProps: {},
  },
  {
    path: "/streams/new",
    element: <StreamCreate />,
    extraProps: {},
  },
  {
    path: "/streams/edit",
    element: <StreamEdit />,
    extraProps: {},
  },
  {
    path: "/streams/delete",
    element: <StreamDelete />,
    extraProps: {},
  },
  {
    path: "/streams/show",
    element: <StreamShow />,
    extraProps: {},
  },
];

routesList.forEach(item => item.id = uuidv4());

// Export the routes for use in our main app
export default routesList;
