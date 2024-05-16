import { useEffect, useState } from 'react';
import { useFormData } from '../../store/formDataSlice';
import styles from './User.module.scss';
import axios from 'axios';
import { TUserData } from '../../types/formDataTypes';

export function User() {
  const { formDataSlice } = useFormData();
  const [userData, setUserData] = useState<TUserData | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/user`
        );

        setUserData(response.data[0]);
      } catch (error) {
        console.error('Failed to get user data:', error);
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles.userContainer}>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.userField}>
        <strong>User name:</strong>{' '}
        {formDataSlice.userName || userData?.userName}
      </div>
      <div className={styles.userField}>
        <strong>Phone Number:</strong>{' '}
        {formDataSlice.phoneNumber || userData?.phoneNumber}
      </div>
    </div>
  );
}

export default User;
