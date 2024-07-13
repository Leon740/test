import { Link } from 'react-router-dom';
import { ItemI } from 'types';
import { Button } from './Button';
import { Icon } from './Icon';

interface ListPropsI {
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: ItemI) => void;
  items: ItemI[];
}

export function List({ addToCart, items }: ListPropsI) {
  return (
    <ul className="flex flex-col flex-wrap sm:flex-row">
      {items.map((item: ItemI) => (
        <li key={item.id} className="p-16 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
          <Link to={`/${item.id}`}>
            <div className="p-16 bg-white h-full rounded-16 flex flex-col">
              <img
                src={item.imageUrl}
                alt={`${item.name}, ${item.price}`}
                className="w-full rounded-8"
              />
              <div className="pt-32 h-full flex flex-col justify-between items-start">
                <div className="w-full">
                  <section className="flex flex-row justify-between">
                    <h3 className="text-ss3-20-bold">{item.name}</h3>
                    <p className="text-ss3-20-regular">{item.price}</p>
                  </section>
                  <p className="text-ss3-20-regular my-32">{item.description}</p>
                </div>
                <Button
                  onClick={() => addToCart(item)}
                  className="py-8 px-24 text-ss3-20-bold rounded-8 flex items-center gap-16 bg-sky-500 text-white"
                >
                  <span>Add to cart</span>
                  <Icon className="shopping-cart" />
                </Button>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
