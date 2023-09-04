import React from 'react';

const LabelList = ({ labels }) => {
    return (
        <div className="label-list">
            <h3>Labels</h3>
            <ul>
                {labels.map(label => (
                    <li key={label.id} style={{ backgroundColor: label.color }}>
                        {label.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LabelList;
