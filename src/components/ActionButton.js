import React from "react";
import "./ActionButton.css";
import { FaRegUserCircle } from "react-icons/fa";

const ActionButton = ({
  type,
  status,
  size,
  iconOnly,
  text,
  onClick,
  displayType,
}) => {
  const buttonClasses = `button ${type} ${status} ${size}  ${displayType === "iconOnly" ? "iconOnly" : ""} ${displayType === "textOnly" ? "textOnly" : ""}`;

  const iconSizeMap = {
    small: 22,
    medium: 24,
    large: 28,
  };
  const iconSize = iconSizeMap[size] || iconSizeMap.medium;

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const content = () => {
    switch (displayType) {
      case "Icon Only":
        return <FaRegUserCircle size={iconSize} />;
      case "Icon With Text":
        return (
          <>
            <FaRegUserCircle size={iconSize} />
            {text}
          </>
        );
      case "Text Only":
      default:
        return text;
    }
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      aria-label={iconOnly ? "User Icon" : undefined}
    >
      {content()}
    </button>
  );
};

export default ActionButton;
