import React from 'react';
import classNames from 'classnames';
import './iconfont.css'

interface IconFontProps {
  styles?: React.CSSProperties;
  icon?: string;
  size?: number;
  color?: string;
  title?: string;
  className?: string;
  onIconClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
  active?: boolean;
  disable?: boolean;
}

const IconFont: React.FC<IconFontProps> = (props) => {
  const {
    title = '',
    className = '',
    styles = {},
    icon,
    size = 14,
    onIconClick,
    children,
    active = false,
    color = '',
  } = props || {};
  return (
    <i
      title={title}
      onClick={(e) => {
        onIconClick && onIconClick(e);
      }}
      style={{
        ...styles,
        cursor: 'pointer',
        fontSize: size,
        color,
        ...(active ? { color: '#09f' } : {}),
      }}
      className={classNames('iconfont', icon, className)}
    >
      {children}
    </i>
  );
};
export default IconFont;
