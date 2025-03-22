import React from 'react'

interface ProductItemProps {
  item: {
    category: string;
    name: string;
    price: string;
    img: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className="space-y-3">
      <img src={`src/assets/img/products_images/${item.img}.png`} alt={item.name} />

      <div className="font-normal text-center space-y-3 tracking-wide">
        <p className="uppercase text-xs">
          {item.category}
        </p>
        <p className="text-xl">
          {item.name}
        </p>
        <p className="text-base">
          {item.price} p
        </p>
      </div>
    </div>
  )
}

export default ProductItem
