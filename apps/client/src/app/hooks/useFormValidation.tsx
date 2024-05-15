import { useState, useEffect, useCallback } from 'react';

function useFormValidation<T extends Record<string, any>>(
    initialValues: T,
    validators: { [K in keyof T]: (value: T[K], formData?: T) => string | undefined }
) {
    const [formData, setFormData] = useState<T>(initialValues);
    const [errors, setErrors] = useState<{ [K in keyof T]?: string }>({});
    const [touched, setTouched] = useState<{ [K in keyof T]?: boolean }>({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = useCallback((data: T) => {
        const newErrors: { [K in keyof T]?: string } = {};
        let allValid = true;
        Object.keys(data as object).forEach(key => {
            const field = key as keyof T;
            if (touched[field] || Object.keys(touched).length === 0) {
                const error = validators[field](data[field], data);
                newErrors[field] = error;
                if (error) allValid = false;
            }
        });
        setErrors(newErrors);
        setIsFormValid(allValid);
    }, [validators, touched]);


    useEffect(() => {
        validateForm(formData);
    }, [formData, touched, validateForm]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value as unknown as T[keyof T] }));
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const name = event.target.name as keyof T;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const resetForm = () => {
        setFormData(initialValues);
        setTouched({});
    };

    return { formData, setFormData, handleChange, handleBlur, errors, isFormValid, touched, setTouched, resetForm };
}

export { useFormValidation };
