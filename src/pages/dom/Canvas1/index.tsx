import React, { FC, memo } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useCheckInput } from 'cb-hooks';
import QuestionPage from 'components/QuestionPage';
import Section from 'components/Section';
import { RectangularColorPicker, CircularColorPicker } from './components';
import questions from './questions';

export const Canvas1Component: FC = () => {
  const [showCanvas, , handleChangeShowCanvas] = useCheckInput(false);
  return (
    <QuestionPage questions={questions} title="Canvas 1">
      <Section title="Render HTML Elements to Canvas">
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={showCanvas}
                onChange={handleChangeShowCanvas}
              />
            }
            label="Show Canvas"
          />
        </div>

        <div>
          <RectangularColorPicker showCanvas={showCanvas} />
        </div>

        <div>
          <CircularColorPicker showCanvas={showCanvas} />
        </div>
      </Section>
    </QuestionPage>
  );
};

const Canvas1 = memo(Canvas1Component);
Canvas1.displayName = 'Canvas1';
export default Canvas1;
