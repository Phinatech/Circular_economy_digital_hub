import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useUser } from '../../context/UserContext';
import AvatarEditor from './AvatarEditor';
import './UserProfile.css';
import PasswordChange from '../Auth/PasswordChange';

const profileSchema = z.object({
    firstName: z.string().min(2, "Minimum 2 characters"),
    lastName: z.string().min(2, "Minimum 2 characters"),
    bio: z.string().max(500, "Maximum 500 characters").optional(),
    website: z.string().url().optional().or(z.literal('')),
});

const UserProfile = () => {
    const { userProfile, updateProfile, updateAvatar } = useUser();
    const [serverError, setServerError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: userProfile || {}
    });

    const handleAvatarUpload = async (avatarBlob) => {
        const { success, error } = await updateAvatar(avatarBlob);
        if (!success) setServerError(error);
    };

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setServerError('');

        const { success, error } = await updateProfile(data);
        if (!success) {
            setServerError(error);
            reset(userProfile);
        }

        setIsSubmitting(false);
    };

    if (!userProfile) return <div>Loading profile...</div>;

    return (
        <div className="user-profile-container">
            <h1>Profile Management</h1>

            <div className="avatar-section">
                <AvatarEditor
                    onAvatarChange={handleAvatarUpload}
                    initialImage={userProfile.avatar}
                />
            </div>
            import PasswordChange from '../Auth/PasswordChange';

            // Add to return statement
            <section className="security-section">
                <h3>Security Settings</h3>
                <PasswordChange />
            </section>

            {serverError && <div className="server-error">{serverError}</div>}

            <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            {...register("firstName")}
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                            className={errors.lastName ? 'error' : ''}
                        />
                        {errors.lastName && (
                            <span className="error-message">{errors.lastName.message}</span>
                        )}
                    </div>
                </div>

                <div className="form-group">
                    <label>Bio</label>
                    <textarea
                        {...register("bio")}
                        disabled={isSubmitting}
                        className={errors.bio ? 'error' : ''}
                        maxLength="500"
                    />
                    <div className="character-count">
                        {watch('bio')?.length || 0}/500
                    </div>
                </div>

                <div className="form-group">
                    <label>Website</label>
                    <input
                        type="url"
                        {...register("website")}
                        disabled={isSubmitting}
                        placeholder="https://example.com"
                    />
                </div>

                <button
                    type="submit"
                    className="save-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Save Profile'}
                </button>
            </form>
        </div>
    );
};

export default UserProfile;