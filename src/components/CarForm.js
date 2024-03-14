import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function CarForm() {

  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };


  return <div className="car-form panel">
  <h4 className="subtitle is-3">Add Car</h4>
  <form>
    <div className="field-group">
      <div className="field">
        <label className="label">Name</label>
        <input
          className="input is-expanded"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="field">
        <label className="label">Cost</label>
        <input
          className="input is-expanded"
          value={cost || ''}
          type="number"
        />
      </div>
    </div>
    <div className="field">
      <button className="button is-link">Submit</button>
    </div>
  </form>
</div>;
}

export default CarForm;
