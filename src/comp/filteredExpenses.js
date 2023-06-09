import "./filteredExpenses.css";

export const FilteredExpenses = (props) => {
  return (
    <div className="container">
      <label> filter expenses by Year </label>
      <select
        className="button"
        value={props.selected}
        onChange={props.onChangeYear}
      >
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};
