import PropTypes, { string } from 'prop-types';
import { Component } from 'react';
import Product from '../product/product';

class Menu extends Component {

  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: string.isRequired,
      }).isRequired
    ).isRequired
  };

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