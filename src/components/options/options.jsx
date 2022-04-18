import React from 'react';


const options = (props) => {
  function toggleCSS(e, item){
    props.click(e.target, item)
  }
  return (
    <section id='opcoes'>
      <ul>
        {props.options.map((item,index) => {
          return (
            <li key={index}  className={props.selected===item?'border':'no-border'}>
              <button className={item} onClick={(e) => toggleCSS(e, item)} value={item}></button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default options;
