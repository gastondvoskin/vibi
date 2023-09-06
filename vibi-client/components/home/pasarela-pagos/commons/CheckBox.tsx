import React, { ChangeEvent } from "react";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <label className="flex items-center space-x-2 text-center justify-center">
      <input
        type="checkbox"
        className=""
        checked={checked}
        onChange={onChange}
      />
      <span className="h-6 text-base text-center items-center">{label}</span>
    </label>
  );
}
