const React = require("react");
const DefaultLayout = require("./layouts/Default");

class Men extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout title={"Flea Market"} cart={cart.length} subtitle={"MEN"}>
        <div>
          <div className="pageNav">
            <div className="backContainer">
              {" "}
              ⬅️{" "}
              <a className="backInProductPage" href="/index">
                back
              </a>
            </div>
            <div>
              <a href="/men/admin" className="pageAdmin">
                Admin Mode (OFF)
              </a>
            </div>
          </div>

          <div className="productShow">
            {products.map((product, i) => {
              return (
                <div className="card" key={i}>
                  {/* eachProduct */}
                  <div className="productImgContainer">
                    <img
                      src={`${product.productImg}`}
                      alt=""
                      className="productImg"
                    />
                  </div>
                  Product Name: {product.productName}
                  <br />
                  Product Price: {product.price}
                  <br />
                  Seller: {product.seller}
                  <br />
                  <form action={`/men/cart/${product._id}`} method="POST">
                    <input type="submit" value="Add to Cart" />
                  </form>
                  <form action={`men/buy/${product._id}`} method="POST">
                    <input type="submit" value="Buy" />
                  </form>
                </div>
              );
            })}
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Men;
