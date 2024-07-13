import { useState } from 'react';
import { ItemI } from 'types';
import { Button } from './Button';
import { Icon } from './Icon';

interface CartPropsI {
  items: ItemI[];
  // eslint-disable-next-line no-unused-vars
  increaseQty: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  decreaseQty: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (id: string) => void;
}

export function Cart({ items, increaseQty, decreaseQty, removeFromCart }: CartPropsI) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`py-64 px-32 fixed top-0 right-0 h-full w-512 bg-white transition ${
        isOpened ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <Button
        className="p-8 items-center absolute top-0 left-0 -translate-x-full"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <Icon className="shopping-cart text-32" />
        <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] w-16 h-16 rounded-full">
          {items.length}
        </span>
      </Button>

      {items.length < 1 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="flex flex-col gap-32 h-full overflow-auto">
          {items.map(({ id, name, price, imageUrl, qty }: ItemI) => (
            <li key={id} className="relative flex flex-row gap-32 items-center">
              <img src={imageUrl} alt={`${name}, ${price}`} className="w-1/4 rounded-8" />
              <Button
                onClick={() => removeFromCart(id)}
                className="absolute top-0 right-0 text-red-500 text-16"
              >
                <Icon className="bin" />
              </Button>
              <section className="flex flex-col gap-16">
                <h3 className="text-ss3-20-bold">{name}</h3>
                <p className="text-ss3-20-regular">{price}</p>
                <div className="flex flex-row text-20 bg-sky-500 max-w-max rounded-24">
                  <Button
                    onClick={() => decreaseQty(id)}
                    className="w-48 h-48 bg-white flex items-center justify-center border border-solid border-sky-500 rounded-full"
                  >
                    <Icon className="minus" />
                  </Button>
                  <span className="py-8 px-24 text-white">{qty}</span>
                  <Button
                    onClick={() => increaseQty(id)}
                    className="w-48 h-48 bg-white flex items-center justify-center border border-solid border-sky-500 rounded-full"
                  >
                    <Icon className="plus" />
                  </Button>
                </div>
              </section>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
