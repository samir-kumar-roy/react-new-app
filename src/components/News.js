import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types';

class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 6,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        console.log("I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e06ea0c3598941ba9ebb2246a860c062&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }
    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }
    render() {
        return (
            <>
                <h2 className='text-center mb-3 page-heading'>Top News Headlines</h2>
                <div className='text-center mb-5'>{this.state.loading && <Loading />}</div>
                <div className="all-news row container mx-auto d-flex justify-content-between">
                    {!this.state.loading && this.state.articles.map((elem) => {
                        return elem.urlToImage !== null && <NewsItem title={elem.title.slice(0, 45)} description={elem.description.slice(0, 88)} imageURL={elem.urlToImage} newsURL={elem.url} date={elem.publishedAt} author={elem.author} key={elem.url} />
                    })}
                </div>
                <div className='d-flex justify-content-around mb-5 rn-buttons'>
                    <button className='btn btn-primary bg-dark' onClick={this.handlePrevClick} disabled={this.state.page <= 1}><span>&lsaquo;</span> Prev</button>
                    <button className='btn btn-primary bg-warning' onClick={this.handleNextClick} disabled={Math.ceil(this.state.totalResults / this.props.pageSize) <= this.state.page}>Next <span>&rsaquo;</span></button>
                </div>
            </>
        )
    }
}
export default News;
