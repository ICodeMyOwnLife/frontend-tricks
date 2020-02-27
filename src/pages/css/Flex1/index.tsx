import React, { FC, memo } from 'react';
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import useMuiSelect from 'hooks/useMuiSelect';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import Masonry from 'components/Masonry';
import questions from './questions';
import useStyles from './styles';

export const Flex1Component: FC = () => {
  const [justifyContent, , handleChangeJustifyContent] = useMuiSelect();
  const [alignItems, , handleChangeAlignItems] = useMuiSelect();
  const [alignContent, , handleChangeAlignContent] = useMuiSelect();
  const [alignSelf, , handleChangeAlignSelf] = useMuiSelect();
  const classes = useStyles();

  return (
    <QuestionPage className={classes.root} questions={questions} title="Flex 1">
      <Section title="align-items vs align-content vs align-self">
        <Box className={classes.selectGroup}>
          <FormControl>
            <InputLabel>justify-content</InputLabel>
            <Select
              value={justifyContent}
              onChange={handleChangeJustifyContent}
            >
              <MenuItem value="">(no value)</MenuItem>
              <MenuItem value="flex-start">flex-start</MenuItem>
              <MenuItem value="flex-end">flex-end</MenuItem>
              <MenuItem value="center">center</MenuItem>
              <MenuItem value="space-between">space-between</MenuItem>
              <MenuItem value="space-around">space-around</MenuItem>
              <MenuItem value="space-evenly">space-evenly</MenuItem>
              <MenuItem value="stretch">stretch</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>align-items</InputLabel>
            <Select value={alignItems} onChange={handleChangeAlignItems}>
              <MenuItem value="">(no value)</MenuItem>
              <MenuItem value="flex-start">flex-start</MenuItem>
              <MenuItem value="flex-end">flex-end</MenuItem>
              <MenuItem value="center">center</MenuItem>
              <MenuItem value="stretch">stretch</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>align-content</InputLabel>
            <Select value={alignContent} onChange={handleChangeAlignContent}>
              <MenuItem value="">(no value)</MenuItem>
              <MenuItem value="flex-start">flex-start</MenuItem>
              <MenuItem value="flex-end">flex-end</MenuItem>
              <MenuItem value="center">center</MenuItem>
              <MenuItem value="space-between">space-between</MenuItem>
              <MenuItem value="space-around">space-around</MenuItem>
              <MenuItem value="space-evenly">space-evenly</MenuItem>
              <MenuItem value="stretch">stretch</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>align-self</InputLabel>
            <Select
              color="secondary"
              value={alignSelf}
              onChange={handleChangeAlignSelf}
            >
              <MenuItem value="">(no value)</MenuItem>
              <MenuItem value="flex-start">flex-start</MenuItem>
              <MenuItem value="flex-end">flex-end</MenuItem>
              <MenuItem value="center">center</MenuItem>
              <MenuItem value="stretch">stretch</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className={classes.flexGroup}>
          <Box
            className={classes.flex1}
            style={{
              justifyContent,
              alignItems,
              alignContent,
              minHeight: '200px',
            }}
          >
            <div className={classes.item} style={{ height: '64px' }} />
            <div
              className={classes.item}
              style={{ height: '40px', alignSelf }}
            />
            <div className={classes.item} style={{ height: '96px' }} />
            <div className={classes.item} style={{ height: '48px' }} />
            <div className={classes.item} style={{ height: '120px' }} />
          </Box>

          <Box
            className={classes.flex1}
            style={{
              justifyContent,
              alignItems,
              alignContent,
              minHeight: '420px',
            }}
          >
            <div className={classes.item} style={{ height: '64px' }} />
            <div
              className={classes.item}
              style={{ height: '40px', alignSelf }}
            />
            <div className={classes.item} style={{ height: '96px' }} />
            <div className={classes.item} style={{ height: '48px' }} />
            <div className={classes.item} style={{ height: '120px' }} />
            <div className={classes.item} style={{ height: '56px' }} />
            <div className={classes.item} style={{ height: '80px' }} />
            <div className={classes.item} style={{ height: '60px' }} />
            <div className={classes.item} style={{ height: '88px' }} />
            <div className={classes.item} style={{ height: '100px' }} />
          </Box>
        </Box>
      </Section>

      <Section title="Static Masonry Layout">
        <Masonry className={classes.masonry} />
      </Section>
    </QuestionPage>
  );
};

const Flex1 = memo(Flex1Component);
Flex1.displayName = 'Flex1';
export default Flex1;
