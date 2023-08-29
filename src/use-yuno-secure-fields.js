import { useEffect, useMemo, useState } from 'react'
import { cvvStyles, expirationStyles, panStyles } from './yuno-credit-card.style'

export const useYunoSecureFields = (sessionId) => {
  const [isPanValid, setIsPanValid] = useState(false)
  const [isPanTouched, setIsPanTouched] = useState(false)
  const [isExpirationValid, setIsExpirationValid] = useState(false)
  const [isExpirationTouched, setIsExpirationTouched] = useState(false)
  const [isCvvValid, setIsCvvValid] = useState(false)
  const [isCvvTouched, setIsCvvTouched] = useState(false)

  const secureFields = useMemo(() => {
    /** @todo: Add the yuno key to an Env */
    const yuno = window.Yuno.initialize(
      'sandbox_yuno_key',
    )

    return yuno.secureFields({
      countryCode: 'BR',
      checkoutSession: sessionId,
    })
  }, [sessionId])

  /** Adding this timeout, we can render the component properly */
  
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     if (!secureFields) return
  //     const secureNumber = secureFields.create({
  //       name: 'pan',
  //       options: {
  //         styles: panStyles,
  //         label: 'Número do cartão',
  //         onChange: ({ error, isDirty }) => {
  //           setIsPanValid(!error)
  //           setIsPanTouched(isDirty)
  //         },
  //       },
  //     })

  //     const secureExpiration = secureFields.create({
  //       name: 'expiration',
  //       options: {
  //         styles: expirationStyles,
  //         label: 'MM/YY',
  //         onChange: ({ error, isDirty }) => {
  //           setIsExpirationValid(!error)
  //           setIsExpirationTouched(isDirty)
  //         },
  //       },
  //     })

  //     const secureCvv = secureFields.create({
  //       name: 'cvv',
  //       options: {
  //         styles: cvvStyles,
  //         label: 'CVV',
  //         onChange: ({ error, isDirty }) => {
  //           setIsCvvValid(!error)
  //           setIsCvvTouched(isDirty)
  //         },
  //       },
  //     })

  //     secureNumber.render('#pan')
  //     secureExpiration.render('#expiration')
  //     secureCvv.render('#cvv')

  //   }, 1)

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [secureFields])

  useEffect(() => {
    if (!secureFields) return
    const secureNumber = secureFields.create({
      name: 'pan',
      options: {
        styles: panStyles,
        label: 'Número do cartão',
        onChange: ({ error, isDirty }) => {
          setIsPanValid(!error)
          setIsPanTouched(isDirty)
        },
      },
    })

    const secureExpiration = secureFields.create({
      name: 'expiration',
      options: {
        styles: expirationStyles,
        label: 'MM/YY',
        onChange: ({ error, isDirty }) => {
          setIsExpirationValid(!error)
          setIsExpirationTouched(isDirty)
        },
      },
    })

    const secureCvv = secureFields.create({
      name: 'cvv',
      options: {
        styles: cvvStyles,
        label: 'CVV',
        onChange: ({ error, isDirty }) => {
          setIsCvvValid(!error)
          setIsCvvTouched(isDirty)
        },
      },
    })

    secureNumber.render('#pan')
    secureExpiration.render('#expiration')
    secureCvv.render('#cvv')
  }, [secureFields])

  const error =
    (!isPanValid && isPanTouched) || (!isExpirationValid && isExpirationTouched) || (!isCvvValid && isCvvTouched)

  return {
    error,
  }
}
