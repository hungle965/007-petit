import React,{Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    propsUpdate() {
        this.setState({
            data: this.props.data
        })
    }
    componentDidMount() {
        this.propsUpdate = this.propsUpdate.bind(this)
    }
    render() {
        return <section class="form"></section>
    }
}

export default Form