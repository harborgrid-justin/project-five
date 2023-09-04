import React, { useRef } from 'react';
import api from '../utils/api';

const AttachmentUploader = ({ taskId }) => {
    const fileInput = useRef(null);
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    const handleUpload = async () => {
        if (!fileInput.current.files[0]) {
            console.error('Please select a file to upload.');
            return;
        }

        if (fileInput.current.files[0].size > MAX_FILE_SIZE) {
            console.error('File size exceeds the allowed limit.');
            return;
        }

        const formData = new FormData();
        formData.append('attachment', fileInput.current.files[0]);

        try {
            await api.post(`/tasks/${taskId}/attachments`, formData);
            // Consider replacing alert with a more user-friendly notification
            alert('Attachment uploaded successfully!');
        } catch (error) {
            console.error('Error uploading attachment', error);
            // Consider providing user-friendly feedback for the error
        }
    };

    return (
        <div>
            <input type="file" ref={fileInput} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default AttachmentUploader;
