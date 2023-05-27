import ProductListItem from './ProductListItem.jsx'

function ProductsList()
{
const productList = [
    {
       "id":"d1951575-4f3e-4a46-be88-cc9ac425023e",
       "title":"Product Title 1",
       "description":"New Description",
       "costPrice":100,
       "unitPrice":120,
       "orderAfter":30
    },
    {
        "id":"1a41b0d6-d89e-46d0-84b8-93863475cdf7",
        "title":"Product Title 2",
        "description":"New Description 2",
        "costPrice":200,
        "unitPrice":220,
        "orderAfter":20
     },
     {
        "id":"22f95571-8ed1-42f5-b574-a31cefa4250c",
        "title":"Product Title 3",
        "description":"New Description 3",
        "costPrice":500,
        "unitPrice":520,
        "orderAfter":70
     }
];

const deleteButtonHandler = (id)=>{
    console.log("Delete button deleted : " + id);
}

const detailsButtonHandler = (product)=>{
    console.log("product id " + product.id);
    console.log("product title " + product.title);
    console.log("product description " + product.description);
    console.log("product costPrice " + product.costPrice);
    console.log("product UnitPrice " + product.unitPrice);
    console.log("product OrderAfter " + product.orderAfter);
}

const productItems = productList.map(item => {
    return (
        <ProductListItem
        key={item.id}
        product={item}
        deleteClicked={deleteButtonHandler}
        detailsClicked={detailsButtonHandler}
        />
    )
});



    return (
    <>
    <div className="container">
      <h3 className="mt-2 p-2">Current available Products</h3>
      {productItems}
    </div>
    </>
    )
}
export default ProductsList;