import React from 'react'
import './Forms.css'

import useForm from '../useForm/useForm'
import validate from '../LoginFormValidationRules/LoginFormValidationRules'

const Form = () => {
    const { 
        values, 
        handleSubmit, 
        handleChange,
        errors
    } = useForm(login, validate)

    function login() {
        console.log(values)
    }

     return (
      <div className="section is-fullheight">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input onChange={handleChange}
                         value={values.email || ''} 
                         className={`input ${errors.email && 'is-danger'}`} 
                         type="email" 
                         name="email" 
                         required/>
                           {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input 
                        onChange={handleChange} 
                        value={values.password} 
                        className={`input ${errors.password && 'is-danger'}`} 
                        type="password" 
                        name="password" 
                        required />
                        {errors.password && (
                            <p className="help is-danger">{errors.password}</p>
                        )}
                  </div>
                </div>
                <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Form;