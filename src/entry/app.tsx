import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

ReactDOM.render(
  <div>
    <Header />
    <div>content</div>
    <Footer />
  </div>,
  document.getElementById('lcApp')
)