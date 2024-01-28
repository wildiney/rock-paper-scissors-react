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
              className={`
              ${optionSelected === item ? 'border-4 border-primary ' : 'border-0'}
              flex flex-col m-0 w-full h-full box-border shadow-lg p-4  bg-tertiary rounded-lg
                `
              }>
              <button
                className={
                  `
                  ${item} 
                  w-full  bg-tertiary   aspect-square max-h-[20vh]`}
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
