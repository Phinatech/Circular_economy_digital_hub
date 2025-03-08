import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from '../../utils/api';
import './PasswordChange.css';

const passwordSchema = z.object({
  currentPassword: z.string().min(8, "Minimum 8 characters"),
  newPassword: z.string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "At least one uppercase letter")
    .regex(/[0-9]/, "At least one number"),
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const PasswordChange = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(passwordSchema)
  });
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError('');
    setSuccessMessage('');

    try {
      await api.put('/auth/password', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
      });
      setSuccessMessage('Password updated successfully');
      reset();
    } catch (error) {
      setServerError(error.response?.data?.message || 'Password change failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="password-change-container">
      <h2>Change Password</h2>
      
      {successMessage && <div className="success-message">{successMessage}</div>}
      {serverError && <div className="error-message">{serverError}</div>}

      <form onSubmit={handleSubmit(onSubmit)} className="password-form">
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            {...register("currentPassword")}
            disabled={isSubmitting}
            className={errors.currentPassword ? 'error' : ''}
          />
          {errors.currentPassword && (
            <span className="validation-error">{errors.currentPassword.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            {...register("newPassword")}
            disabled={isSubmitting}
            className={errors.newPassword ? 'error' : ''}
          />
          {errors.newPassword && (
            <span className="validation-error">{errors.newPassword.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            disabled={isSubmitting}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && (
            <span className="validation-error">{errors.confirmPassword.message}</span>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Updating...' : 'Change Password'}
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;