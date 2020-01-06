import React, {
  FC,
  memo,
  ReactNode,
  ButtonHTMLAttributes,
  SyntheticEvent,
} from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

export const ButtonComponent: FC<ButtonProps> = ({
  className,
  id,
  href,
  target,
  rel,
  download,
  type = 'button',
  onClick,
  children,
}) =>
  href ? (
    <a
      className={clsx(classes.Button, className)}
      id={id}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    // eslint-disable-next-line react/button-has-type
    <button
      className={clsx(classes.Button, className)}
      id={id}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );

const Button = memo(ButtonComponent);
Button.displayName = 'Button';
export default Button;

export interface ButtonProps {
  className?: string;
  id?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (e: SyntheticEvent) => void;
  children?: ReactNode;
}
