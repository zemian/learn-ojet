/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./my-hello-view.html', './my-hello-viewModel', 'text!./component.json', 'css!./my-hello-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-hello', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);
