const ToyRow = ({ toy }) => {
  const { seller_name, category, price, toy_name, quantity } = toy;
  return (
    <>
      <tr className="hover">
        <td>{seller_name}</td>

        <td>{toy_name}</td>

        <td>{category}</td>

        <td>${price}</td>

        <td>{quantity}</td>

        <td>
          <button className="Btn-fill">View Details</button>
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
