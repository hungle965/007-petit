import '../css/main.css'
import $ from 'jquery'
import React, {Component} from 'react'
import Header from './common/Header'
import Featured from './common/Featured'
import Form from './common/Form'
import Footer from './common/Footer'
import Content from './common/Header'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            data: props.data,
            viewWidth: $(document).width(),
            viewHeight: $(document).height(),
            scrollTop: $(document).scrollTop()
        }
        
    }
    propsUpdate() {
        this.setState({
            data: this.props.data
        })
    }
    scrollEvent() {
        this.setState({
            scrollTop: $(document).scrollTop()
        })
    }
    viewUpdate() {
        this.setState({
            viewWidth: $(document).width(),
            viewHeight: $(document).height()
        })
    }
    componentDidMount() {
        this.propsUpdate = this.propsUpdate.bind(this)
        window.addEventListener('resize', this.viewUpdate.bind(this))
        window.addEventListener('scroll', this.scrollEvent.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.viewUpdate.bind(this))
        window.removeEventListener('scroll', this.scrollEvent.bind(this))
    }
    render() {
        return [
            <Header data={this.state} />,
            <Featured data={this.state} />,
            <Content data={this.state} />,
            <Form data={this.state} />,
            <Footer data={this.state} />
        ]
    }
}

export default Main