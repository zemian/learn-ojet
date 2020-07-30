import Composite = require("ojs/ojcomposite");
import * as view from "text!./my-hello-view.html";
import viewModel from "./my-hello-viewModel";
import * as metadata from "text!./component.json";
import "css!./my-hello-styles";

Composite.register("my-hello", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});