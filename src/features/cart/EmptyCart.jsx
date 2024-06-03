import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold mt-7">
        Oops, No Items in Your Cart... Go to menu to add some tasty Pizza's to your
        cart
      </p>
    </div>
  );
}

export default EmptyCart;
