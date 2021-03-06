import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useFormikContext } from 'formik';

import ErrorMessage from '../ErrorMessage';
import { Body1Bold } from '../../../styles';
import { capitalizeFirstLetter } from '../../../utils';
import { theme } from '../../../config';
import CustomTextInput from '../../CustomTextInput';

function FormField({ name, border = 1, width = '100%', ...textInputProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <Body1Bold style={{ paddingLeft: 8, marginTop: 8 }}>
        {capitalizeFirstLetter(name)}
      </Body1Bold>
      <View style={[styles.inputContainer, { borderWidth: border }]}>
        <CustomTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          width={width}
          {...textInputProps}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    borderColor: theme.grey5,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default FormField;
