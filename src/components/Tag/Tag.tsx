import { css, StyleSheet } from 'aphrodite';
import * as React from 'react';

type TagSize = "is-small" | "is-medium" | "is-large";

interface ITagProps {
  id?: number;
  size?: TagSize;
  selected?: boolean;
  handleOnClick: (id: number | undefined) => void;
}

const styles = StyleSheet.create({
  tagStyle: {
    ':hover': {
      cursor: 'pointer'
    }
  },
});

export const Tag: React.SFC<ITagProps> = ({ id, size, selected, children, handleOnClick }) => (
  <span 
    onClick={() => handleOnClick(id)}
    className={`${css(styles.tagStyle)} ${size} tag ${selected && 'is-primary'}`}
  >
    {children}
  </span>
)