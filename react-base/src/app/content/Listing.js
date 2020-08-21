import React,{Component} from 'react'

class Listing extends Component {
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
        return <section class="listing"></section>
    }
}

export default Listing