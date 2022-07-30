import {createRoot} from "react-dom/client";

import {Player} from "liqvid";

// resources
import controls from "@env/controls";
import {script} from "./markers";

function Lesson() {
  return (
    <Player controls={controls} script={script}>
      <h1>Hello World!</h1>
    </Player>
  );
}

createRoot(document.querySelector("main")).render(<Lesson />);
