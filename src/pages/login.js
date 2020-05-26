import React from "react";
// Layouts...
import BasicLayout from "../components/layouts/BasicLayout";

function LoginPage() {
    return (
      <BasicLayout>
            <section class="login-bg">
                <div class="container text-center">
                    <fieldset>
                        <legend>Already a member, sign in here.</legend>
                        <form class="login-form">
                            <input type="email" name="email" placeholder="  Email address..."></input>
                            <br></br>
                            <input type="password" name="password" placeholder="  Password..."></input>
                            <br></br>
                            <button type="submit">Sign In</button>
                        </form>
                    </fieldset>
                    <br></br>
                    {/* <h3 class="signup-header">Sign Up</h3> */}
                </div>
            </section>
      </BasicLayout>  
    );
}

export default LoginPage;
