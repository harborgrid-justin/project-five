import React, { useRef } from 'react';
import api from '../utils/api';

const AttachmentUploader = ({ taskId }) => {
    const fileInput = useRef(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('attachment', fileInput.current.files[0]);

        try {
            await api.post(`/tasks/${taskId}/attachments`, formData);
            alert('Attachment uploaded successfully!');
        } catch (error) {
            console.error('Error uploading attachment', error);
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
