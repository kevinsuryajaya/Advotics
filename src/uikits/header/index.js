import * as React from "react";
import styled from 'styled-components';

const Title = styled.h2`
    color: #707070C4;
    font-weight: 600;
    margin:0px;
    padding-top:0px;
`

type Props = {
  text: string,
};

/**
 * @param {String} props.text
 * @returns {React.Node}
 */

export default function Header({ text }: Props): React.Node {
  return (
    <div>
      <Title>{text}</Title>
    </div>
  );
}
