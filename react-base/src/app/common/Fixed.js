import React,{Component} from 'react'

class Fixed extends Component {
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
        return <asde class="fixed"></asde>
    }
}

export default Fixed