import { useState, useEffect } from 'react';

type UseFormInputParams = {
  initialValue?: string;
  validate?: (value: string) => boolean;
}

type UseFormInput = {
  value: string;
  dirty: boolean;
  focus: boolean;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const useFormInput = ({ initialValue = '', validate }: UseFormInputParams = {}): UseFormInput => {
  const [value, setValue] = useState(initialValue);
  const [dirty, setDirty] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const onChangeText = (text: string) => {
    setValue(text);
    setDirty(true);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return {
    value,
    dirty,
    focus,
    onChangeText,
    onFocus,
    onBlur,
  };
};

export default useFormInput;
