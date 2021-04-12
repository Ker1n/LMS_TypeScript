import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HomeWorks extends Component {
    render() {
        return (
            <div>
                HomeWorks
            </div>
        )
    }
}

const mapStateToProps = (state:string) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeWorks)
