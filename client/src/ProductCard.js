function ProductCard(props) {
  return (
    <div>
      <img src={props.product.image_path} className="product-image" alt={props.product.name} />
      <p> this is a product card </p>
    </div>
  );
}

export default ProductCard;
