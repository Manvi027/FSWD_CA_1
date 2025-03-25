import React from 'react';

const ServiceCard = ({title , description}) => {
    return (
        <div>
            <p><strong>{title}</strong></p>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;