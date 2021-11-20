import React from 'react'

const layoutStyle ={
    color: 'white',
    height: '100%'
}

const titleStyle = {
    boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
    margin: '2px',
    paddingLeft: '5%',
    padding: '0.5em',
    fontSize: '1.5rem',
    width: '96%',
    fontWeight: '400',
    display: 'block',
    textAlign: 'left',
    borderRadius: '10px'
}

const contentStyle = {
    height: '80%',
    margin: '2px',
    boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
    width: '96%',
    borderRadius: '10px'
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
