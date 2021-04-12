import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Lessons extends Component {
    render() {
        return (
            <div>
               homeworks 
            </div>
        )
    }
}

const mapStateToProps = (state:string) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)
