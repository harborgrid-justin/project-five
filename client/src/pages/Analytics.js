import React, { useEffect } from 'react';
import useAnalytics from '../hooks/useAnalytics';

const Analytics = () => {
    const { data, fetchData } = useAnalytics();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h2>Project Analytics</h2>
            <div>
                {/* Display analytics data here */}
                {data.map(item => (
                    <div key={item.id}>{item.content}</div>
                ))}
            </div>
        </div>
    );
};

export default Analytics;
