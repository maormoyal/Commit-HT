import styles from './Form.module.scss';
import Form from '../../components/form/Form';

/* eslint-disable-next-line */
export interface FormProps { }

export function FormPage(props: FormProps) {
  return (
    <div className={styles['container']}>
      <Form />
    </div>
  );
}

export default FormPage;
