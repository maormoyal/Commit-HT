import { FormEvent, useState } from 'react';
import styles from './Form.module.scss';
import InputField from '../input/InputField';
import { useFormValidation } from '../../hooks/useFormValidation';
import { useFormData } from '../../store/formDataSlice';
import { IFormData } from '../../types/formDataTypes';

const initialValues: IFormData = {
  userName: '',
  phoneNumber: '',
  password: '',
  confirmPassword: ''
};

const validators = {
  userName: (value: string) => {
    if (!value) return "User name is required";
    if (value.length > 32) return "User name must be up to 32 characters";
    return undefined;
  },
  phoneNumber: (value: string) => {
    if (!value) return "Phone number is required";
    if (!/^\d{10}$/.test(value)) return "Phone number must be exactly 10 digits";
    return undefined;
  },
  password: (value: string) => {
    if (!value) return "Password is required";
    if (value.length < 6 || value.length > 12) return "Password must be 6-12 characters";
    if (!/[A-Z]/.test(value) || !/[!@#$&*]/.test(value)) return "Password must include an uppercase letter and a special character";
    return undefined;
  },
  confirmPassword: (value: string, formData?: IFormData) => {
    if (!formData) return undefined;
    if (value !== formData.password) return "Passwords do not match";
    return undefined;
  }
};


export function Form() {

  const { setFormDataSlice } = useFormData();
  const [responseStatus, setResponseStatus] = useState('');

  const {
    formData,
    setFormData,
    handleChange,
    handleBlur,
    errors,
    isFormValid,
    touched,
    setTouched,
  } = useFormValidation<IFormData>(initialValues, validators);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form Data Submitted:', formData);
      setFormDataSlice(formData);
      setFormData(initialValues);
      saveFormData(formData);
      setTouched({});
    }
  };

  const saveFormData = async (formData: IFormData) => {
    try {
      const response = await fetch('http://your-api-endpoint.com/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponseStatus('Form data saved successfully!');
      setFormDataSlice(data);
    } catch (error) {
      console.error('Failed to save form data:', error);
      setResponseStatus('Failed to save form data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <InputField
        label="User Name"
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.userName}
        touched={touched.userName}
        required={true}
      />
      <InputField
        label="Phone Number"
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.phoneNumber}
        touched={touched.phoneNumber}
        required={true}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.password}
        touched={touched.password}
        required={true}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.confirmPassword}
        touched={touched.confirmPassword}
        required={true}
      />
      <button type="submit" disabled={!isFormValid} className={styles.submitBtn}>Submit</button>
      {responseStatus && <p>{responseStatus}</p>}
    </form>
  );
}

export default Form;