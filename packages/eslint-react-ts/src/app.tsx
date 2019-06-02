import React from 'react';
import { render } from 'react-dom';
import Test from 'pages/test';

const App = function app() {
  return (
    <div>
      <Test />
    </div>
  );
};

render(<App />, document.getElementById('app'));
