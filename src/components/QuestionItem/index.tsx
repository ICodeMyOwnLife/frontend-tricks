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
  todos,
}) => {
  const classes = useStyles();
  const [open, toggleOpen] = useToggle(false);
  const hasReferences = !!(references && references.length);
  const hasTodos = !!(todos && todos.length);
  const showBottomBox = hasReferences || hasTodos;

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

          {showBottomBox && (
            <Box className={classes.BottomBox}>
              {hasReferences && (
                <Box>
                  <Typography className={classes.BottomBoxTitle} variant="h5">
                    References
                  </Typography>
                  <ol>
                    {references!.map(({ name, url }) => (
                      <li key={url}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {name}
                        </a>
                      </li>
                    ))}
                  </ol>
                </Box>
              )}

              {hasTodos && (
                <Box>
                  <Typography className={classes.BottomBoxTitle} variant="h5">
                    Todos
                  </Typography>
                  <ol>
                    {todos!.map(todo => (
                      <li key={todo}>{todo}</li>
                    ))}
                  </ol>
                </Box>
              )}
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
