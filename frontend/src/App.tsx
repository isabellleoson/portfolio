// import { useState } from "react";
import Root from "./views/Root";
import Home from "./views/Home";
import DevProjects from "./views/DevProjects";
import Glasskiosken from "./views/Glasskiosken";
import UrbanGreens from "./views/UrbanGreens";
import Resume from "./views/Resume";

import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0);

    const router = createHashRouter([
        {
            children: [
                {
                    element: <Home />,
                    path: "/",
                },
                {
                    element: <DevProjects />,
                    path: "/devprojects",
                },

                {
                    element: <Resume />,
                    path: "/resume",
                },
                {
                    element: <Glasskiosken />,
                    path: "/glasskiosken",
                },

                {
                    element: <UrbanGreens />,
                    path: "/urbangreens",
                },
            ],
            element: <Root />,
        },
    ]);

    return (
        <>
            {" "}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
