import { BaseballController } from "./Controllers/BaseballController.js";

class App {
  BaseballController = new BaseballController();
}

window["app"] = new App();
