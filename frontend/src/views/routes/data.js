import { v4 as uuidv4 } from "uuid";

import StreamList from "../pages/streams/list";
import StreamCreate from "../pages/streams/create";
import StreamEdit from "../pages/streams/edit";
import StreamDelete from "../pages/streams/delete";
import StreamShow from "../pages/streams/show";
const routesList = [
  {
    id: uuidv4(),
    path: "/",
    element: <StreamList />,
  },
  {
    id: uuidv4(),
    path: "/streams/new",
    element: <StreamCreate />,
  },
  {
    id: uuidv4(),
    path: "/streams/edit",
    element: <StreamEdit />,
  },
  {
    id: uuidv4(),
    path: "/streams/delete",
    element: <StreamDelete />,
  },
  {
    id: uuidv4(),
    path: "/streams/show",
    element: <StreamShow />,
  },
];

// Export the routes for use in our main app
export default routesList;
