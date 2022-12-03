import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1200;
  top: var(--medium);
  right: var(--medium);
  color: green;
  cursor: pointer;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
