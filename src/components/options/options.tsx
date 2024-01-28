import { useState } from "react";

type Options = {
  options: string[],
  selected: string,
  clickHandler: (item: string) => void
}
const Options: React.FC<Options> = ({ options, selected, clickHandler }) => {
  const [optionSelected, setOptionSelected] = useState(selected)

  const buttonHandler = (item: string) => {
    setOptionSelected(item)
    clickHandler(item)
  }

  return (
    <section id='opcoes'>
      <ul>
        {options.map((item, index: number) => {
          return (
            <li
              key={index}
              className={optionSelected === item ? 'border' : 'no-border'}>
              <button
                className={item}
                // onClick={() => toggleCSS()}
                onClick={() => buttonHandler(item)}
                value={item}
                name={item}
              ></button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Options;
