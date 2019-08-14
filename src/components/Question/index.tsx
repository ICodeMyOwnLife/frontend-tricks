import React, { FC, memo, ReactNode } from 'react';
import classes from './styles.module.scss';

export const QuestionImpl: FC<QuestionProps> = ({
  title,
  questions,
  children,
}) => (
  <div className={classes.Container}>
    <h2 className={classes.Title}>{title}</h2>
    <div className={classes.Content}>{children}</div>
    <div className={classes.Questions}>
      <h3>Questions</h3>
      <div>
        {questions.map(({ question, answer, references }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <details key={index}>
            <summary className={classes.Question}>
              <span className={classes.Index}>{index + 1}.</span> {question}
            </summary>

            <div className={classes.Answer}>{answer}</div>

            {references && references.length && (
              <div className={classes.References}>
                <h4>References</h4>
                <ol>
                  {references.map(({ name, url }) => (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </details>
        ))}
      </div>
    </div>
  </div>
);

const Question = memo(QuestionImpl);
Question.displayName = 'Question';
export default Question;

export interface QuestionProps {
  title: string;
  questions: QuestionInfo[];
  children?: ReactNode;
}

export interface QuestionInfo {
  question: ReactNode;
  answer: ReactNode;
  references?: ReferenceInfo[];
}

export interface ReferenceInfo {
  name: string;
  url: string;
}
