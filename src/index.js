import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FORMERR } from 'dns';

// ReactDOM.render(
//   <h1>hello react</h1>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <form>
//     <input type="text" name="username"></input>
//     <input type="password" name='password'></input>
//     <button type='submit'>sign in</button>
//   </form>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <h1>It is {new Date().toLocaleString()}</h1>,
//   document.getElementById('root')
// );
function Welcome(props) {
  return <h1>welcome world {props.name} {props.gender}</h1>
}

function StudentCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>Age: {props.age}</div>
    </div>
  )
}

function Card(props) {
  return (
    <div className='img_shoes' style={{backgroundImage : `url(${props.img})`, width:'400px', height:'600px'}}>
      <div className='title_word'><h1 >{props.title}</h1></div>
      <div className='text_word'>{props.subTitle}</div>
    </div>
  )
};
// ReactDOM.render(
//   // <Welcome name='f' gender='male'/>,
//   <div>
//     {/* <StudentCard name='Jone' age={15} />
//     <StudentCard name='Mike' age={16} />
//     <StudentCard name='Kate' age={17} /> */}
//     <Card img='https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-rubishoes/default/dwc7af6a35/426138/426138-01-2.jpg?sw=400&sh=600&sm=fit' 
//     title='shoes' subTitle='Good for men'/>
//   </div>,
//   document.getElementById('root')
// );

ReactDOM.render(
  // <Welcome name='f' gender='male'/>,
  <div><App /></div>,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
