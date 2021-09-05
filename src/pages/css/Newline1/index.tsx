import { FC, memo, useState, CSSProperties } from 'react';
import QuestionPage from 'components/QuestionPage';
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

export const NewlineComponent: FC = () => {
  const [whitespaceStyleValue, setWhitespaceStyleValue] = useState(
    whiteSpaceStyleValues[0],
  );

  return (
    <QuestionPage title="Newline 1" questions={questions}>
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
    </QuestionPage>
  );
};

const Newline = memo(NewlineComponent);
Newline.displayName = 'Newline';
export default Newline;

type WhiteSpaceStyleValue = CSSProperties['whiteSpace'];
