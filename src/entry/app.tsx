import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from '../components/header'
import { Footer } from '../components/footer';
import { AutoComplete } from '../components/auto-complete/auto-complete';

ReactDOM.render(
  <div>
    <Header />
    <div>
      <div>content</div>
      <AutoComplete/>
    </div>
    <Footer />
  </div>,
  document.getElementById('lcApp')
)