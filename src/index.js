import React, { useRef, useState } from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import './index.css';
import { useReactToPrint } from 'react-to-print';
import NavigationBar from "./component/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./component/Side"


const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <NavigationBar />
      <div className='d-flex' >
        <SideBar />
        <div className='print-area'>
          <div ref={componentRef}>
            <div className='w-50 mx-3'>
              <table style={{ border: '1px solid', margin: 'auto', width: '50vw' }} border="1" >
                <thead>
                  <th>No</th>
                  <th>Name</th>
                  <th>ID</th>
                </thead>
                <tbody>
                  <tr>
                    <th> 1 </th>
                    <th> Aang </th>
                    <th> Angin </th>
                  </tr>
                  <tr>
                    <th> 1 </th>
                    <th> Aang </th>
                    <th> Angin </th>
                  </tr>
                  <tr>
                    <th> 1 </th>
                    <th> Aang </th>
                    <th> Angin </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button onClick={handlePrint} >Print this out!</button>
        </div>

      </div>

    </div>
  )
};

render(<Example />, document.querySelector("#root"));




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
