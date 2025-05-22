import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   Children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://www.google.com">visit google</a>
)

const username = "satyam "

const reactElement = React.createElement(
  'a',
  {
    'href': 'https://www.google.com',
    'target': '_blank'
  },
  'click me to visit google',
  username
);

createRoot(document.getElementById('root')).render(
  reactElement
)
