import React from 'react';

const LabelManager = ({ labels }) => {
    return (
        <div className="label-manager">
            <h3>Manage Labels</h3>
            <ul>
                {labels.map(label => (
                    <li key={label.id} style={{ color: label.color }}>
                        {label.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LabelManager;
