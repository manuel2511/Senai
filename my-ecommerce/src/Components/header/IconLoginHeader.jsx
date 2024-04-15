import { UserCircle } from "@phosphor-icons/react";
const IconLoginHeader = () => {
  const iconSize = 32;
  return (
    <div className="iconLogin">
      <UserCircle size={iconSize} />
      <p>Login</p>
    </div>
  );
};

export default IconLoginHeader;
