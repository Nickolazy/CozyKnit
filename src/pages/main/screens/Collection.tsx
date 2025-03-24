import ProductItem from "@/components/ProductItem"
import Button from "@/components/Button"

const Collection = () => {
  const items = [
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    },
    {
      category: "Свитера",
      name: "Летний вязаный свитер",
      price: "5000",
      img: "productItem"
    }
  ]

  return (
    <div id="collection" className="bg-beige">
      <div className="container py-12 space-y-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3">
          { 
            items.map((item, index) => {
              return <ProductItem key={index} item={item} />
            })
          }
        </div>

        <div className="w-full flex justify-end">
          <Button text="Весь каталог" icon="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Collection
