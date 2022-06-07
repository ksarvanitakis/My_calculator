import React from "react";
import { View, Text } from 'react-native';

const ResultField = ({result}) => {
  return (
    <View>
      <Text>{result ? result : 'no result yet'}</Text>
    </View>
  );
}

export default ResultField;
