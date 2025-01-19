import * as yup from 'yup'
import type { FormRule } from '../type'
import { PHONE_REGEX } from '@/common/constant/regex'
import useLangStore from '@/stores/LangStore'

const useFormRule = () => {
  const t = useLangStore()

  const { rule } = t.lang.common.form

  const required = (): FormRule => {
    return yup.string().required(rule.required)
  }

  const minNumber = (min: number): FormRule => {
    return yup.number().min(min, rule.min)
  }

  const email = (): FormRule => {
    return yup
      .string()
      .required(rule.required)
      .test('no-whitespace', rule.whiteSpace, (value) => Boolean(value && value === value.trim()))
      .email(rule.email)
  }

  const phone = (): FormRule => {
    return yup.string().required(rule.required).matches(PHONE_REGEX, rule.phone)
  }

  const password = (minLength: number, maxLength: number): FormRule => {
    return yup
      .string()
      .required(rule.required)
      .min(minLength, rule.minLength)
      .max(maxLength, rule.maxLength)
      .test('no-whitespace', rule.whiteSpace, (value) => Boolean(value && value === value.trim()))
  }

  const combine = (...rules: any): FormRule => {
    return rules.reduce((schema: any, rule: any) => schema.concat(rule), yup.mixed())
  }

  return { required, minNumber, email, phone, password, combine}
}

export default useFormRule
