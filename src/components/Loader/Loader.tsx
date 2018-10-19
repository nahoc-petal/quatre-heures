import * as React from 'react';

type LoaderSize = "is-small" | "is-medium" | "is-large";

interface ILoaderProps {
  size?: LoaderSize,
  style?: React.CSSProperties,
}

export const Loader: React.SFC<ILoaderProps> = ({ size, style }) => (
  <div className="has-text-centered">
    <span style={style} className={`${size} is-fullwidth button is-white is-loading`} />
  </div>
)