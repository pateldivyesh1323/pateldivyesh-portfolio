import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AnimatedCursor from 'react-animated-cursor'
import SmoothScrolling from './Components/SmoothScrolling.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmoothScrolling>
      <AnimatedCursor
        innerSize={6}
        outerSize={38}
        innerScale={1}
        outerScale={2}
        innerStyle={{
          backgroundColor: 'white'
        }}
        trailingSpeed={5}
        outerStyle={{
          mixBlendMode: 'exclusion',
          backgroundColor: 'white'
        }}
        clickables={[
          'a',
          'button',
          {
            target: 'img',
            outerStyle: {
              mixBlendMode: 'normal',
              backgroundColor: '#86b9b0'
            },
            outerScale: 1,
          },
          {
            target: '.divyesh-patel',
            outerScale: 3
          }
        ]}
      />
      <App />
    </SmoothScrolling>
  </React.StrictMode>,
)
