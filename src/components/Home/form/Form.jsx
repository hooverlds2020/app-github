import React from 'react'
import "../form/Form.styles.css"

const Form = ({handlerValue, handlerSubmit}) => {
    return (
        <form onSubmit={(e) => handlerSubmit(e)} className="form-container">
            <input
                onChange={( {target} ) =>handlerValue(target)}
                type="text" 
                placeholder="Search.." required="required"
                className = "mt-3"
            />
            <button type="submit" className = "mt-3"><i className="fa fa-search"></i></button>
        </form>
    )
}

export default Form
