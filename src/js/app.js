import {f7init} from "./f7init.js";
import Render from "./render.js";
import RouterInit from "./router.js";

document.addEventListener("DOMContentLoaded", () => { //deviceready
  Render();
  f7init();
  RouterInit();
});
