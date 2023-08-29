const commonStyles = `
    .Yuno-text-field__content input.Yuno-text-field__input {
      border: 1px solid #E0E4D8;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.15px;
      font-family: Satoshi,value-serif-regular;
      line-height: 1.4375em;
      color: #000000DE;
      height: 42px;
      padding: 18px 50px 10px 11px;
    }
    .Yuno-text-field__content.focus input.Yuno-text-field__input {
      border: 2px solid #000000DE;
    }
    .Yuno-text-field__content.hover input.Yuno-text-field__input {
      border: 1px solid #000000DE;
    }
    .Yuno-text-field__content label.Yuno-text-field__label {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.15px;
      font-family: Satoshi,value-serif-regular;
      line-height: 1.4375em;
      color: #444840;
      opacity: 0.54;
      top: 9px;
      left: 14px;
    }
    .Yuno-text-field__content.focus label.Yuno-text-field__label {
      color: #000000DE;
      opacity: 1;
      top: 2px;
    }
    .Yuno-text-field__content.inputLoaded label.Yuno-text-field__label {
      top: 2px;
    }
    .Yuno-text-field__content .Yuno-text-field__end-adornment {
      top: 11px;
    }
  `

export const panStyles =
  commonStyles +
  `
    .Yuno-text-field__content input.Yuno-text-field__input {
      border-radius: 4px 4px 0 0;
    }
    .Yuno-text-field__content:not(.focus):not(.error):not(.hover) input.Yuno-text-field__input {
      border-bottom: none;
    }
`

export const expirationStyles =
  commonStyles +
  `
    .Yuno-text-field__content input.Yuno-text-field__input {
      border-radius: 0 0 0 4px;
    }
    .Yuno-text-field__content:not(.focus):not(.error):not(.hover) input.Yuno-text-field__input {
      border-right: none;
    }
`

export const cvvStyles =
  commonStyles +
  `
    .Yuno-text-field__content input.Yuno-text-field__input {
      border-radius: 0 0 4px 0;
    }
`
