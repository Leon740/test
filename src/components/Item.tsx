import { useNavigate, useParams } from 'react-router';
import { ItemI } from 'types';
import { Button } from './Button';
import { Icon } from './Icon';

interface ItemPropsI {
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: ItemI) => void;
  items: ItemI[];
}

export function Item({ addToCart, items }: ItemPropsI) {
  const { id } = useParams();

  const item = items.find((i) => i.id === id);

  const navigate = useNavigate();

  if (!item) {
    return <p>Not Found</p>;
  }

  return (
    <div>
      <Button onClick={() => navigate(-1)} className="flex flex-row items-center gap-8 py-32">
        <span className="-rotate-180">
          <Icon className="arrow" />
        </span>
        <span>Back</span>
      </Button>
      <div className="flex flex-col gap-32 sm:items-center sm:flex-row">
        <img
          src={item.imageUrl}
          alt={`${item.name}, ${item.price}`}
          className="w-full rounded-8 sm:w-1/2"
        />
        <div className="h-full flex flex-col justify-between items-start sm:w-1/2">
          <div className="w-full">
            <section className="flex flex-row justify-between sm:flex-col">
              <h3 className="text-ss3-20-bold">{item.name}</h3>
              <p className="text-ss3-20-regular">{item.price}</p>
            </section>
            <p className="text-ss3-20-regular my-32">{item.description}</p>
          </div>
          <Button
            onClick={() => addToCart(item)}
            className="py-8 px-24 text-ss3-20-bold rounded-16 flex items-center gap-16 bg-sky-500 text-white"
          >
            <span>Add to cart</span>
            <Icon className="shopping-cart" />
          </Button>
        </div>
      </div>
    </div>
  );
}
