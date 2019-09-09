import React, { FC, memo } from 'react';
import Question from 'components/Question';
import questions from './questions';
import classes from './styles.module.scss';

export const LiveEdit1Impl: FC = () => (
  <Question title="Live Edit 1" questions={questions}>
    <div
      className="EditableText"
      contentEditable
      suppressContentEditableWarning
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula
        risus, viverra ac porta non, volutpat sed est. Integer lectus odio,
        convallis vitae tincidunt vitae, semper vitae tortor. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Suspendisse quis
        aliquet nibh. Pellentesque erat metus, congue ut dui quis, dapibus porta
        sem. Cras porttitor nisl arcu, in rutrum est ornare eget. Fusce quis
        eleifend purus, et interdum sapien. Etiam rutrum est a erat accumsan
        auctor.
      </p>
      <p>
        Aliquam non ornare turpis. Pellentesque laoreet efficitur libero euismod
        molestie. Quisque imperdiet arcu nunc, ut cursus tellus elementum eu.
        Nullam id dui nisi. Quisque maximus enim libero, eleifend faucibus quam
        porta tincidunt. Quisque vestibulum, libero vitae viverra luctus, ligula
        metus elementum ex, ut varius dui elit in nunc. Morbi elementum faucibus
        aliquam. Sed commodo sapien eu odio maximus pretium.
      </p>
      <p>
        Morbi ut ligula sollicitudin, fringilla orci vel, lobortis est. Fusce
        consequat tellus eget dolor egestas, sit amet suscipit ex luctus. Nulla
        venenatis finibus sapien eu blandit. Nunc porttitor nulla ac hendrerit
        gravida. Pellentesque non tristique turpis, at aliquet tellus.
        Suspendisse potenti. Fusce tempus turpis non fermentum placerat. Nunc
        hendrerit mi velit. Duis ultricies facilisis lorem vel scelerisque.
      </p>
    </div>

    <style
      className={classes.StyleEditor}
      contentEditable
      suppressContentEditableWarning
    >
      {`.EditableText {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid lightgray;
}

.EditableText p {
  margin: 0 0 12px;
}
`}
    </style>
  </Question>
);

const LiveEdit1 = memo(LiveEdit1Impl);
LiveEdit1.displayName = 'LiveEdit1';
export default LiveEdit1;
