import React from 'react'
import { Carousel } from 'antd';

function SiderList() {
    const contentStyle: React.CSSProperties = {
        height: '200px',
        color: '#ccc',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

        </div>
    )
}

export default SiderList
