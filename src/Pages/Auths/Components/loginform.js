import React from 'react'

function LoginForm() {
    return (
      
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div class="card-body  ">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered font-semibold"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered font-semibold"
              />
              <label class="label">
                <a href="#" class="label-text-alt font-semibold">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input type="button" value="Login" class="btn btn-primary" />
            </div>
  
            <button class="btn btn-link">Need account ? Sign Up</button>
          </div>
        </div>
    
    );

}

export default LoginForm
