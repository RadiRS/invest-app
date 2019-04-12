import React from 'react';
import * as Progress from 'react-native-progress';
import { Colors } from '../../themes';

const ProgressBar = props => {
  const { progress, style } = props;

  return (
    <Progress.Bar
      style={[style]}
      progress={progress}
      width={null}
      height={10}
      borderRadius={5}
      borderColor={Colors.lightGray}
      color={Colors.primary}
      unfilledColor={Colors.background}
    />
  );
};

export default ProgressBar;
