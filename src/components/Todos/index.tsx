import { FC, memo } from 'react';
import { Box, Typography } from '@material-ui/core';

export const TodosComponent: FC<TodosProps> = ({ className, todos }) => (
  <Box>
    <Typography className={className} variant="h5">
      Todos
    </Typography>
    <ol>
      {todos!.map(todo => (
        <li key={todo}>{todo}</li>
      ))}
    </ol>
  </Box>
);

const Todos = memo(TodosComponent);
Todos.displayName = 'Todos';
export default Todos;

export interface TodosProps {
  className?: string;
  todos: string[];
}
