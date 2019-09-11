import React, { FC, memo, useState, CSSProperties } from 'react';
import Question from 'components/Question';
import questions from './questions';

const text = `This is first paragraph.\nThis is second paragraph.\nThis is third paragraph.`;

const whiteSpaceStyleValues: WhiteSpaceStyleValue[] = [
  'inherit',
  'initial',
  'normal',
  'nowrap',
  'pre',
  'pre-line',
  'pre-wrap',
  'revert',
];

export const NewlineImpl: FC = () => {
  const [whitespaceStyleValue, setWhitespaceStyleValue] = useState(
    whiteSpaceStyleValues[0],
  );

  return (
    <Question title="Newline 1" questions={questions}>
      <div>
        <div>
          <select
            value={whitespaceStyleValue}
            onChange={e =>
              setWhitespaceStyleValue(e.target.value as WhiteSpaceStyleValue)
            }
          >
            {whiteSpaceStyleValues.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <p style={{ whiteSpace: whitespaceStyleValue }}>{text}</p>
        <pre>{text}</pre>
      </div>
    </Question>
  );
};

const Newline = memo(NewlineImpl);
Newline.displayName = 'Newline';
export default Newline;

type WhiteSpaceStyleValue = CSSProperties['whiteSpace'];
