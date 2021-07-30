import React from 'react'
function SignUpForm() {
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
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password again"
                class="input input-bordered font-semibold"
              />
              <label class="label">
                Already have an acccount ?
                <button class="btn btn-link">Login In</button>
  
              </label>
            </div>
            <div class="form-control mt-6">
              <input type="button" value="Sign Up" class="btn btn-primary" />
            </div>
          </div>
        </div>
   
    );
  }
  
export default SignUpForm;