import React from "react"
import styled from "styled-components"
import { colors } from "../../../styles/theme"

const Anchor = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  border-width: 1px;
  &:hover {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 3px rgba(164, 202, 254, 0.45);
  }
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`

const Button = ({ label, className }) => (
  <div className={className}>
    <Anchor href="#">{label}</Anchor>
  </div>
)

export default Button
