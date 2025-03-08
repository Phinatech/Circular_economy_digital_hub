import React, { useState, useRef } from 'react';
import AvatarEditor from './AvatarEditor';
import PropTypes from 'prop-types';
import './AvatarEditor.css';

const AvatarEditorComponent = ({ 
    onAvatarChange, 
    initialImage = null,
    width = 150,
    height = 150,
    border = 50,
    borderRadius = 75,
    allowedFileTypes = ['image/jpeg', 'image/png'],
    maxFileSize = 5 * 1024 * 1024 // 5MB
}) => {
    const editorRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(initialImage);
    const [scale, setScale] = useState(1);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validate file type
        if (!allowedFileTypes.includes(file.type)) {
            setError('Only JPG/PNG files are allowed');
            return;
        }

        // Validate file size
        if (file.size > maxFileSize) {
            setError('File size must be less than 5MB');
            return;
        }

        setError(null);
        const reader = new FileReader();
        reader.onload = () => setImageSrc(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        if (editorRef.current) {
            const canvas = editorRef.current.getImageScaledToCanvas();
            canvas.toBlob(blob => {
                onAvatarChange(blob);
            }, 'image/jpeg');
        }
    };

    return (
        <div className="avatar-editor-container">
            <div className="avatar-editor-wrapper">
                <AvatarEditor
                    ref={editorRef}
                    image={imageSrc || ''}
                    width={width}
                    height={height}
                    border={border}
                    borderRadius={borderRadius}
                    color={[255, 255, 255, 0.6]}
                    scale={scale}
                    rotate={0}
                />
            </div>

            <div className="avatar-controls">
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept={allowedFileTypes.join(',')}
                    id="avatar-input"
                    className="file-input"
                />
                <label htmlFor="avatar-input" className="upload-button">
                    Choose Image
                </label>

                {imageSrc && (
                    <>
                        <div className="scale-control">
                            <label>Zoom:</label>
                            <input
                                type="range"
                                min="1"
                                max="3"
                                step="0.1"
                                value={scale}
                                onChange={(e) => setScale(parseFloat(e.target.value))}
                            />
                        </div>

                        <button 
                            type="button" 
                            onClick={handleSave}
                            className="save-button"
                        >
                            Save Changes
                        </button>
                    </>
                )}

                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

AvatarEditorComponent.propTypes = {
    onAvatarChange: PropTypes.func.isRequired,
    initialImage: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    border: PropTypes.number,
    borderRadius: PropTypes.number,
    allowedFileTypes: PropTypes.arrayOf(PropTypes.string),
    maxFileSize: PropTypes.number
};

export default AvatarEditorComponent;