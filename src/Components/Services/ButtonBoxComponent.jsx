import React, { useState } from 'react';
import './ButtonBoxComponent.css';
import uiux from '../../assets/uiux.jpg'
import development from '../../assets/development.jpg'

const ButtonBoxComponent = () => {
    const initialContent = {
        title: 'Title 1',
        list: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
        backgroundImage: `url(${uiux})`
    };

    const [boxContent, setBoxContent] = useState(initialContent);

    const handleButtonClick = (buttonType) => {
        if (buttonType === 'button1') {
            setBoxContent({
                title: 'Title 1',
                list: ['Item 1.1', 'Item 1.2', 'Item 1.3'],
                backgroundImage: `url(${uiux})`
            });
        } else if (buttonType === 'button2') {
            setBoxContent({
                title: 'Title 2',
                list: ['Item 2.1', 'Item 2.2', 'Item 2.3'],
                backgroundImage: `url(${development})`
            });
        }
    };

    return (
        <div className="container">
            {boxContent && (
                <div className="box" style={{ backgroundImage: boxContent.backgroundImage }}>
                    <h2>{boxContent.title}</h2>
                    <ul>
                        {boxContent.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="buttons">
                        <button onClick={() => handleButtonClick('button1')}>Button 1</button>
                        <button onClick={() => handleButtonClick('button2')}>Button 2</button>
                    </div>
                </div>
            )}


        </div>
    );
};

export default ButtonBoxComponent;
