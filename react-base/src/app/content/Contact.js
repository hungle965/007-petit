import {Component} from 'react'

class Contact extends Component {
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
        return <section class="contact"></section>
    }
}

export default Contact