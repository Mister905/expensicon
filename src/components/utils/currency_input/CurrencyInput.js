import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

const defaultMaskOptions = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false
};

const CurrencyInput = props => {
  const currencyMask = createNumberMask(defaultMaskOptions);
  const { value } = props.field;
  return <MaskedInput value={props.field.value} mask={currencyMask} />;
};

export default CurrencyInput;
