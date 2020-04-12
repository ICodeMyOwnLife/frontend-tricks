import { makeStyles, createStyles, Theme } from '@material-ui/core';
import {
  lime,
  deepOrange,
  cyan,
  indigo,
  brown,
  yellow,
} from '@material-ui/core/colors';

const points = [
  { x: '50%', y: '0%' },
  { x: '100%', y: '50%' },
  { x: '50%', y: '100%' },
  { x: '0%', y: '50%' },
];

const createRadialGradient = ({
  x,
  y,
}: {
  x: string;
  y: string;
}) => `radial-gradient(
  100% 100% at ${x} ${y},
  transparent 0 49%,
  ${brown.A700} 0 51%,
  transparent 0 100%
)`;

const diameter = 240;

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${diameter}px, 1fr))`,
      gridGap: spacing(3),
      justifyItems: 'center',
    },
    circle: {
      width: diameter,
      height: diameter,
      borderRadius: '50%',
    },
    ellipse: {
      width: 200,
      height: diameter,
      borderRadius: '50%',
    },
    radial1: {
      backgroundImage: `radial-gradient(
        circle farthest-side at 70% 30%,
        ${lime.A100},
        ${deepOrange[700]} 92%)`,
    },
    radial2: {
      backgroundImage: `radial-gradient(
        ellipse 80% 90% at 50% 15%,
        ${cyan.A100},
        ${indigo[800]})`,
    },
    radial3: {
      backgroundImage: `radial-gradient(
        closest-side,
        ${yellow[400]} 10%,
        transparent 20% 36%,
        ${yellow[500]} 36% 38%,
        transparent 40% 56%,
        ${yellow[600]} 56% 58%,
        transparent 60% 76%,
        ${yellow[700]} 76% 78%,
        transparent 80% 96%,
        ${yellow[800]} 96% 98%,
        transparent 100%)`,
    },
    radial4: {
      backgroundColor: brown[400],
      backgroundImage: points.map(createRadialGradient).join(`,\n`),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Radial' });

export default useStyles;
