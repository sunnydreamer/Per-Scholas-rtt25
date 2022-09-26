const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"Shopping Cart"}
      >
        <div>
          <div className="pageNav">
            <div className="backContainer">
              {" "}
              ⬅️{" "}
              <a className="backInProductPage" href="/index">
                back
              </a>
            </div>
          </div>

          {/* cart items */}
          <ul>
            {cart.map((product, i) => {
              return (
                <div className="cartItem" key={i}>
                  <div className="cartImgContainer">
                    <img
                      src={`${product.productImg}`}
                      alt=""
                      className="cartImg"
                    />
                  </div>
                  <div className="cartText">
                    Product Name: {product.productName}
                    <br />
                    Price: ${product.price}
                    <br />
                  </div>
                </div>
              );
            })}
          </ul>
          <form action="#" className="BuyNowBtn">
            <input type="submit" value="Buy Now" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Cart;
