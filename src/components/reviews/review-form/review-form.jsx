import { connect } from "react-redux";
import { useState } from "react";
import Rate from '../../rate';
import { addReview } from '../../../redux/actions/action';

const INIT_FORM_STATE = {
  name: '',
  text: '',
  rating: 3
};

function ReviewForm({ handleSubmit }) {

  const [formValues, setFormValues] = useState(INIT_FORM_STATE);

  //TODO Вынести в свой собственный ХУК
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues(
      {
        ...formValues,
        [name]: value
      }
    )
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formValues);
    //TODO Добавить способ обнуления значений формы!
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="user">User</label>
        <input
          type="text"
          name="name"
          placeholder="insert username"
          onChange={handleInputChange}
        />
        <label htmlFor="review">Review</label>
        <input
          type="text"
          name="text"
          placeholder="review"
          onChange={handleInputChange}
        />
        <div>
          {/* //TODO Добавить рейтинг */}
          <Rate />
        </div>
        <button>Add review</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleSubmit: (review) => dispatch(addReview(review, props))
  }
}

export default connect(null, mapDispatchToProps)(ReviewForm);