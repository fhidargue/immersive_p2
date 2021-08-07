const ProductCheckout = (props) => {
  const { name, price, quantity } = props;

  return (
    <section className="product-checkout" key={name}>
      <p className="product-checkout__name">{name}</p>
      <span className="product-checkout__divider">x</span>
      <p className="product-checkout__quantity"> {quantity}</p>
      <span className="product-checkout__divider">x</span>
      <p className="product-checkout__price"> ${price}</p>
    </section>
  );
};

export default ProductCheckout;
