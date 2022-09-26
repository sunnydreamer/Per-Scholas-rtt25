const React = require("react");
const DefaultLayout = require("./layouts/Default");

class MenAdmin extends React.Component {
  render() {
    const { products } = this.props;
    const { cart } = this.props;
    return (
      <DefaultLayout
        title={"Flea Market"}
        cart={cart.length}
        subtitle={"Men Admin"}
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
            <div>
              <a href="/men" className="pageAdmin">
                Admin Mode (ON)
              </a>
            </div>
          </div>

          <a href="/men/admin/new">
            <div className="addBtn"> Add New Product</div>
          </a>

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
                  <form action={`/men/admin/${product._id}/edit`}>
                    <input type="submit" value="Edit" />
                  </form>
                  <form
                    action={`/men/admin/${product._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
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

module.exports = MenAdmin;
