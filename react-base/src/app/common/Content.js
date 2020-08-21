import React, {Component} from 'react'
import Contact from '../Content/Contact'
import Home from '../Content/Home'
import Listing from '../Content/Listing'
import News from '../Content/News'
import Page from '../Content/Page'
import Dynamic from '../config/Dynamic'
class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            data: props.data,
            content: Dynamic
        }
    }
    propsUpdate() {
        this.setState({
            data: this.props.data
        })
    }
    componentDidMount() {
        /*
        $.ajax({
            url: Config.ajaxUrl,
            type: 'post',
            dataType: 'json',
            data: {
                action: 'loadContent'
            }
        }).done((ajaxResponse) => {
            console.log(ajaxResponse)
            this.setState({
                isLoaded: true,
                content: ajaxResponse
            })
        })
        */
        this.propsUpdate = this.propsUpdate.bind(this)
    }
    render() {
        if (this.state.isLoaded) {
            const mapItems = {
                'contact': <Contact data={this.state} />,
                'home': <Home data={this.state} />,
                'listing': <Listing data={this.state} />,
                'news': <News data={this.state} />,
                'page': <Page data={this.state} />
            }
            return <content class="home">
                {mapItems[Config.contentType]}
            </content>
        }
        return null
    }
}

export default Content