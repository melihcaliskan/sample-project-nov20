import React, { useState } from 'react';
import { PasswordInput as Input, Progress, Popover, Text } from '@mantine/core';
import { IoPersonOutline, IoMailOutline } from "react-icons/io5";

import { requirements } from '../utils/constants';
import { getStrength } from '../utils/helpers';

const PasswordRequirement = ({ meets, label }) => {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center', marginTop: 7 }}
      size="sm"
    >
      {meets ? <IoPersonOutline /> : <IoMailOutline />} <span style={{ marginLeft: 10 }}>{label}</span>
    </Text>
  );
}

export const PasswordInput = () => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';
  return (

    <Popover
      opened={popoverOpened}
      position="bottom"
      placement="start"
      withArrow
      styles={{ popover: { width: '100%' } }}
      noFocusTrap
      transition="pop-top-left"
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={
        <Input
          required
          label="Your password"
          placeholder="Your password"
          description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      }>
      <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
      <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
      {checks}
    </Popover>
  );
};

export default PasswordInput;