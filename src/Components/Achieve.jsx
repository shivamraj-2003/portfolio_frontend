import React from 'react';

const Achieve = ({ title, description }) => {
    return (
        <div name="achievements" className="max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-bold mb-2">{ title }</h2>
            <p className=" text-xl text-lime-700">{ description }</p>
        </div>
    );
};

export default Achieve;
