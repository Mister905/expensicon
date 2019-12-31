import React, { Component } from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

class CurrencyInput extends Component {
  defaultMaskOptions = {
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

  render() {
    const { amount } = this.props.form.values;
    const { setFieldValue, errors } = this.props.form;
    const currencyMask = createNumberMask(this.defaultMaskOptions);
    return (
      <MaskedInput
        mask={currencyMask}
        value={amount}
        onChange={e => {
          setFieldValue("amount", e.target.value);
        }}
        className={errors.amount && "invalid"}
      />
    );
  }
}

export default CurrencyInput;
