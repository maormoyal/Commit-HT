import { useFormData } from '../../store/formDataSlice';
import styles from './User.module.scss';

/* eslint-disable-next-line */
export interface UserProps { }

export function User(props: UserProps) {


  const { formDataSlice } = useFormData();

  return (
    <div className={styles.userContainer}>
      <div className={styles.userField}>
        <strong>User name:</strong> {formDataSlice.userName}
      </div>
      <div className={styles.userField}>
        <strong>Phone Number:</strong> {formDataSlice.phoneNumber}
      </div>
    </div>
  );
}

export default User;
