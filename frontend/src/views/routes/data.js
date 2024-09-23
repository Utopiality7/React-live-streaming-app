import uuid from "uuid";

import StreamList from "../pages/streams/list";
import StreamCreate from "../pages/streams/create";
import StreamEdit from "../pages/streams/edit";
import StreamDelete from "../pages/streams/delete";
import StreamShow from "../pages/streams/show";
const routesList = [
  {
    id: uuid.v4(),
    path: "/",
    element: <StreamList />,
  },
  {
    id: uuid.v4(),
    path: "/streams/new",
    element: <StreamCreate />,
  },
  {
    id: uuid.v4(),
    path: "/streams/edit",
    element: <StreamEdit />,
  },
  {
    id: uuid.v4(),
    path: "/streams/delete",
    element: <StreamDelete />,
  },
  {
    id: uuid.v4(),
    path: "/streams/show",
    element: <StreamShow />,
  },
];

// Export the routes for use in our main app
export default routesList;
