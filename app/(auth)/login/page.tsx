 import Link from "next/link";

 export default function Login() {
    return (
        <div>
            <h1>
                Welcome Back
            </h1>
            <p>
                sign in to your Account
            </p>

        <form >
{/* enter username */}
            <div>
                <label >
                    username
                </label>
                <input type="text" placeholder="Enter Username" />
            </div>
{/* email */}
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter Mail" />
            </div>
{/* password */}
            <div>
                <label >Password</label>
                <input type="password" placeholder="Enter Password" />
            </div>
{/* forget password */}
            <div>  
                <Link href="#">Forgot Password?</Link> 
            </div>
{/* signin button */}
            <button>
                Sign in
            </button>
        </form>
{/* Signup */}
        <p> Don&apos;t have an account?{" "}
            <Link href = "#"> Sign Up</Link>  
        </p>
        </div>
    );
 }