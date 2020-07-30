import Composite = require("ojs/ojcomposite");
import * as view from "text!./my-custom-comp.html";
import viewModel from "./my-custom-comp";
import * as metadata from "text!./component.json";
import "css!./my-custom-comp.css";

Composite.register("my-custom-comp", {
    view: view,
    viewModel: viewModel,
    metadata: JSON.parse(metadata)
});
