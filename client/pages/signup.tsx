
const  Signup =()=>{
    return(
        <div className="container">

  
      
          <div className="login-card">
      
            <div className="login-card-items">
      
         
      
            </div>
      
          </div>
          <div className="login-signup-cards">
          <div className="signup-card">
      
            <div className="signup-card-items">
      
              <h1 className="signup-tag">Sign Up</h1>
      
              <form className="form-items"> 
      
                <input className="email-item" type="email" placeholder="E-Mail" />
      
                <input className="password-item" type="password" placeholder="Password" />
      
                <button className="button-item" type="button">Sign Up</button>
      
                <div className="have-account-item">
      
                  <a href="#">Have already an account? <span>Log In</span></a>
      
                </div>
                </form>
      
            </div>
      
          </div>
      
        </div>
     
      </div>
  
    )
}
export default Signup