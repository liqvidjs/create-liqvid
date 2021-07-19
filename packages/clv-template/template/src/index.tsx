import * as ReactDOM from "react-dom";

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

ReactDOM.render(<Lesson/>, document.querySelector("main"));
