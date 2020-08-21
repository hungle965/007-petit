import React,{Component} from 'react'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staticData: props.staticData
        }
    }
    propsUpdate() {
        this.setState({
            staticData: this.props.staticData
        })
    }
    componentDidMount() {
        this.propsUpdate = this.propsUpdate.bind(this)
    }

    render() {
        return <section class="news"></section>
    }
}

export default News