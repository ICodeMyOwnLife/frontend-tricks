import React, { FC, memo } from 'react';
import { QuestionInfo } from 'types/app-common';
import {
  ListItem,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from '@material-ui/core';
import useToggle from 'hooks/useToggle';
import useStyles from './styles';

export const QuestionItemComponent: FC<QuestionItemProps> = ({
  index,
  question,
  answer,
  references,
}) => {
  const classes = useStyles();
  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <ListItem button onClick={toggleOpen}>
        <ListItemText classes={{ primary: classes.Question }}>
          {index}. {question}
        </ListItemText>
      </ListItem>
      <Collapse in={open} timeout="auto">
        <Box className={classes.HiddenContent}>
          <Box className={classes.Answer}>{answer}</Box>
          {!!references && references.length && (
            <Box className={classes.References}>
              <Typography variant="h5">References</Typography>
              <ol>
                {references.map(({ name, url }) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </li>
                ))}
              </ol>
            </Box>
          )}
        </Box>
      </Collapse>
    </>
  );
};

const QuestionItem = memo(QuestionItemComponent);
QuestionItem.displayName = 'QuestionItem';
export default QuestionItem;

export interface QuestionItemProps extends QuestionInfo {
  index: number;
}
