import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AvatarEditor from 'react-avatar-editor';
import './UserProfile.css';

// Validation schema
const profileSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 characters"),
  lastName: z.string().min(2, "Minimum 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(500, "Bio must be less than 500 characters"),
  website: z.string().url().optional().or(z.literal('')),
});

const UserProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const editorRef = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema)
  });

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  const handleSaveAvatar = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob(blob => {
        // Handle avatar upload logic
      }, 'image/jpeg');
    }
  };

  const onSubmit = data => {
    console.log('Profile data:', data);
    // Add profile update logic
  };

  return (
    <div className="user-profile">
      <h2>Profile Settings</h2>
      
      <div className="avatar-section">
        <AvatarEditor
          ref={editorRef}
          image={avatar || ''}
          width={150}
          height={150}
          border={50}
          borderRadius={75}
          color={[255, 255, 255, 0.6]}
          scale={1.2}
        />
        <div className="avatar-controls">
          <input
            type="file"
            onChange={handleAvatarChange}
            accept="image/*"
            id="avatar-upload"
          />
          <label htmlFor="avatar-upload" className="upload-button">
            Choose Avatar
          </label>
          <button onClick={handleSaveAvatar} className="save-avatar-button">
            Save Avatar
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              {...register("firstName")}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              {...register("lastName")}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            {...register("bio")}
            className={errors.bio ? 'error' : ''}
            maxLength="500"
          />
          <div className="bio-counter">
            {watch('bio')?.length || 0}/500
          </div>
        </div>

        <div className="form-group">
          <label>Website</label>
          <input
            type="url"
            {...register("website")}
            placeholder="https://example.com"
          />
        </div>

        <button type="submit" className="save-profile-button">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;