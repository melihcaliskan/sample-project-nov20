import React, { useState } from "react";
import { SegmentedControl } from '@mantine/core';
import { languageList } from '../utils/constants';
import i18n from "i18next";

export const LanguageSelector = () => {
  const [value, setValue] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setValue(lng);
  }
  return (
    <SegmentedControl
      value={value}
      onChange={changeLanguage}
      data={languageList}
    />
  )
};

export default LanguageSelector;