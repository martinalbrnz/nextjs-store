// TODO: Implement the props when the API is ready
const OrderItem = ({/* props */}) => {
    return(
        <>
            <img src="/" alt="Order number..." /> {/* Here we get the products image */}
            <h3>Order #300 {/* Here we get the order number */}</h3>
            <p>Description: 4 chocolate snacks {/* Here we get the items from the order */}</p>
            <p>Status: Delivered {/* Here we get status from props */}</p>

        </>
    );
};

export default OrderItem;