import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AutoComplete } from '../components/AutoComplete';

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