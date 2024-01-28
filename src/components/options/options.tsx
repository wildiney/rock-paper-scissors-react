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
    <section>
      <ul className="flex gap-3 sm:gap-6 items-center">
        {options.map((item, index: number) => {
          return (
            <li
              key={index}
              className={`flex flex-col m-0 w-full h-full box-border shadow-lg
                `
              }>
              <button
                className={
                  `${optionSelected === item ? 'border-4 border-primary rounded-lg' : 'border-0'}
                  ${item} 
                  w-full  bg-tertiary  rounded-lg shadow-lg aspect-square`}
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
