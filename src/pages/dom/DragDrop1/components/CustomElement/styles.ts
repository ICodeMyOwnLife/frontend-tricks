import { makeStyles, createStyles } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { CustomItemData } from '../types';

const sizeMap: Record<CustomItemData['size'], number> = {
  large: 32,
  medium: 28,
  small: 24,
};

const styles = () =>
  createStyles({
    root: ({ size }: CustomElementStylesProps) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: sizeMap[size],
      height: sizeMap[size],
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: deepOrange[500],
      borderRadius: '50%',
    }),
  });

const useStyles = makeStyles(styles, { name: 'CustomElement' });

export default useStyles;

export interface CustomElementStylesProps {
  size: CustomItemData['size'];
}
