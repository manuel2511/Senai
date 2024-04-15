import { ShoppingCart } from "@phosphor-icons/react";
const ShoppingCartHeader = () => {
  const iconSize = 32;
  return (
    <div className="iconShoppingCart">
      <ShoppingCart size={iconSize} />
      <span>12</span>
    </div>
  );
};
export default ShoppingCartHeader;
