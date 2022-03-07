import MenuItems from "./MenuItems";
const Dropdown = ({ right, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {right.map((right, index) => (
        <MenuItems items={right} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
