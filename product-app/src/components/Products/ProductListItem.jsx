function ProductsListItem({product,deleteClicked,detailsClicked})
{
    return(
        <>
        {/* <ul>
        <li>Id : {product.id}</li>
        <li>Title - {product.title}</li>
        <li>Description - {product.description}</li>
        <li>Cost Price - {product.costPrice}</li>
        <li>Selling Price - {product.unitPrice}</li>
        <li>Reorder After - {product.orderAfter}</li>
        </ul>
        <button onClick={()=> deleteClicked(product.id)}>Delete</button>
        <button onClick={()=> detailsClicked(product)}>Details</button>
 */}

        <div className="card mb-2">
  <div className="card-header">
    {product.title}
  </div>
  <div className="card-body">
    <h5 className="card-title">Price: {product.costPrice}</h5>
    <p className="card-text">{product.description}</p>
    <button className="btn btn-danger m-1" onClick={()=> deleteClicked(product.id)}>Delete</button>
    <button className="btn btn-primary m-1" onClick={()=> detailsClicked(product)}>Details</button>
  </div>
</div>

        </>
    );
}
export default ProductsListItem;