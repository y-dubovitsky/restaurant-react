import PropTypes, { string } from 'prop-types';
import { Component } from 'react';
import Product from '../product/product';

class Menu extends Component {

  render() {
    const { menu } = this.props;

    return (
      <div>
        {
          menu.map((id) => {
            return <Product key={id} id={id} />
          })
        }
      </div>
    )
  }
}

export default Menu;