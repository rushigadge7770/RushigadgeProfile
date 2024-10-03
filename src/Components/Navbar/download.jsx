import React from 'react';
import cv from './resume.pdf';

const DownloadCVButton = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + {cv};  // Adjust the path to your CV file
        link.setAttribute('download', "Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button onClick={downloadCV}>
            Download CV
        </button>
    );
};

export default DownloadCVButton;
