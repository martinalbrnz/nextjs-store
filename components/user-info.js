import OrderItem from "./order-item";
const UserInfo = () => {
  return (
    <>
      <div>
        <img src="https://via.placeholder.com/200" alt="user photo" />
        <h3>User name and last name</h3>
        <p>user email</p>
      </div>
      <div>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
      </div>
    </>
  );
};

export default UserInfo;
