import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import classes from './styles.module.scss';

export const FullPage1Impl: FC = () => (
  <Question title="" questions={questions}>
    <div className={classes.Container}>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <div className={classes.Ads}>
        <div className={classes.AdsImg} />
      </div>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
      <p>
        debounceTime delays values emitted by the source Observable, but drops
        previous pending delayed emissions if a new value arrives on the source
        Observable. This operator keeps track of the most recent value from the
        source Observable, and emits that only when dueTime enough time has
        passed without any other value appearing on the source Observable. If a
        new value appears before dueTime silence occurs, the previous value will
        be dropped and will not be emitted on the output Observable.
      </p>
      <p>
        This is a rate-limiting operator, because it is impossible for more than
        one value to be emitted in any time window of duration dueTime, but it
        is also a delay-like operator since output emissions do not occur at the
        same time as they did on the source Observable. Optionally takes a
        SchedulerLike for managing timers.
      </p>
    </div>
  </Question>
);

const FullPage1 = memo(FullPage1Impl);
FullPage1.displayName = 'FullPage1';
export default FullPage1;
