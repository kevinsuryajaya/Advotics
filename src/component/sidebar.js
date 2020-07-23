// @flow
import * as React from 'react'
import styled from "styled-components";
import Submenu from '../uikits/submenu'
import '../scss/sidebar.scss'

const Active = styled.div`
  background-color: #D2D2D2;
`
/**
 * @returns {React.Node}
 */
export default function Navbar() {
  return (
    <React.Fragment>
      <div data-component="sidebar">
        <div className="sidebar">
          <ul className="list-group flex-column d-inline-block first-menu">
            <Submenu
              icon={'fas fa-bars'}
            />
            <Active>
            <Submenu
              menu={'Dashboard'}
              icon={'far fa-chart-bar'}
            />
            </Active>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
