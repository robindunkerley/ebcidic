import React from 'react'

const layoutStyle ={
    color: 'white',
    height: '100%'
}

const titleStyle = {
    border: '1px solid white',
    fontSize: '2.5rem',
    display: 'block',
    textAlign: 'left',
    paddingLeft: '5%'
}

const contentStyle = {
    height: '84%',
    padding: '5% 0',
    border: '1px solid white'
}


const Layout = (props) => {
    
    return (
        <div style={layoutStyle}className="main-content-container">
            <span style={titleStyle} className="title">{props.title}</span>
            <div style={contentStyle} className="content">
                {props.children}
            </div>
            
        </div>
    )
}


Layout.defaultProps = {
    title: 'title'
}

export default Layout
