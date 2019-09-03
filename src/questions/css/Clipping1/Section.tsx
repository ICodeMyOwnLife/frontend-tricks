import React, { FC, memo } from 'react';
import classnames from 'classnames';
import imgSrc from './1.jpg';
import classes from './styles.module.scss';

export const SectionImpl: FC<SectionProps> = ({
  float = 'left',
  imageClassName,
}) => (
  <div className={classes.Section}>
    <img
      className={classnames(
        classes.SectionImage,
        classes[float],
        imageClassName,
      )}
      src={imgSrc}
      alt="wild"
    />
    <p className={classes.SectionText}>
      Maecenas aliquet orci eu leo consectetur, ut tincidunt sem imperdiet.
      Nulla sed leo non augue mollis ultricies in a dolor. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nullam erat magna, semper eu massa sit
      amet, pulvinar rutrum nunc. Praesent sit amet nisl vel mi condimentum
      facilisis. Aliquam ut lacus tempor, iaculis arcu eu, faucibus diam. Nam at
      nibh euismod, finibus nulla sit amet, consectetur arcu. Donec venenatis
      lobortis elit, ut dictum metus suscipit ut. Sed vehicula, dui eu euismod
      condimentum, dui ex tincidunt metus, et condimentum dui leo ac eros. Sed
      feugiat fermentum iaculis. Maecenas id ipsum quis justo ultrices
      facilisis. Praesent lorem magna, aliquam vel eleifend eget, sagittis ac
      neque. Curabitur urna erat, consequat quis sollicitudin non, commodo et
      nisl. Ut scelerisque porttitor quam vel sodales.
    </p>
  </div>
);

const Section = memo(SectionImpl);
Section.displayName = 'Section';
export default Section;

export interface SectionProps {
  float?: 'left' | 'right';
  imageClassName?: string;
}
