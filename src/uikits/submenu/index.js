import * as React from "react";
import styled from "styled-components";

const Menu = styled.i`
  color: #37B04C;
`;

type Props = {
  menu: string,
  icon: string,
};

/**
 * @param {String} props.menu
 * @param {String} props.icon
 * @return {React.Node}
 */
export default function Submenu({ menu, anchor, icon }: Props): React.Node {
  return (
    <div>
      <li className="list-group-item pl-3 py-2">
        <Menu className={icon} aria-hidden="true">
          <span className="ml-2 align-middle">{menu}</span>
        </Menu>
      </li>
    </div>
  );
}
