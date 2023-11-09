import React, { Component } from 'react'

class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date } = this.props;
        return (
            <div className='card col-md-4 overflow-none py-1 mb-3' style={{ width: "18rem" }}>
                <img src={imageURL} className='card-img-top' alt="" style={{ width: "100%", objectFit: "cover", height: "140px", objectPosition: "center" }} />
                <div className='card-body'>
                    <h5 className='card-title' style={{ marginBottom: "14px" }}>{title}</h5>
                    <p className='card-text mb-1'>{description}</p>
                    <p className='card-text'><small style={{ fontSize: "10px", fontWeight: "300", color: "black" }}>by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsURL} className='btn btn-primary d-block py-1' target="__blank">Read More</a>
                </div>
            </div>
        )
    }


}
export default NewsItem;
