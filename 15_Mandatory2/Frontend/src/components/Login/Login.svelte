<script>
    // @ts-nocheck
    // import { navigate } from "svelte-routing";
    import { BASE_AUTH_URL, SESSION } from "../../store/globalsStore";
    import { useNavigate, useLocation } from "svelte-navigator";
    import Cookies from "js-cookie";

    const navigate = useNavigate();
    const location = useLocation();

    let email;
    let password;

    async function handleLogin(event) {
        event.preventDefault(); // prevent default form submission behavior
        const user = { email: email, password: password };
        console.log(user);

        try {
            const response = await fetch($BASE_AUTH_URL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                $SESSION = data.session;
                // Set a cookie with a name, value and expiration time
                Cookies.set("user", JSON.stringify(data.session), { expires: 7 });
                // login successful, redirect to dashboard or home page
                navigate("/contact", { replace: true });
            } else {
                // login failed, show error message or toast
                console.error("Login failed"); // replace with desired error handling
                console.error(data.message); // replace with desired error handling
            }
        } catch (error) {
            console.error(error); // replace with desired error handling
        }
    }
</script>

<div class="bodyStyle">
    <div class="row login">
        <div class="login">
            <h1>Login</h1>
            <form on:submit={handleLogin} method="post">
                <input
                    type="email"
                    name="email"
                    bind:value={email}
                    placeholder="Email"
                    required="required"
                />
                <input
                    type="password"
                    name="password"
                    bind:value={password}
                    placeholder="Password"
                    required="required"
                />
                <div class="row gap-2 px-3">
                    <button
                        type="submit"
                        class="btn btn-primary btn-block btn-large col"
                        >Log In</button
                    >
                    <a
                        class="btn btn-primary btn-block btn-large col"
                        href="/signUp"
                    >
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);

    .btn {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        padding: 4px 10px 4px;
        margin-bottom: 0;
        font-size: 13px;
        line-height: 18px;
        color: #333333;
        text-align: center;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
        vertical-align: middle;
        background-color: #f5f5f5;
        background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -webkit-linear-gradient(#ffffff, #e6e6e6);
        background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: linear-gradient(top, #ffffff, #e6e6e6);
        background-repeat: repeat-x;
        border-color: #e6e6e6 #e6e6e6 #e6e6e6;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        border: 1px solid #e6e6e6;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.05);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        *margin-left: 0.3em;
    }

    .btn-large {
        padding: 9px 14px;
        font-size: 15px;
        line-height: normal;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .btn:hover {
        color: #333333;
        text-decoration: none;
        background-color: #e6e6e6;
        border-color: #dde93e;
        background-position: 0 -15px;
        -webkit-transition: background-position 0.1s linear;
        -moz-transition: background-position 0.1s linear;
        -ms-transition: background-position 0.1s linear;
        -o-transition: background-position 0.1s linear;
        transition: background-position 0.1s linear;
    }

    .btn-primary,
    .btn-primary:hover {
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        color: #ffffff;
    }

    .btn-primary {
        background-color: #dde93e;
        background-image: -moz-linear-gradient(top, #c98a2b, #dde93e);
        background-image: -webkit-linear-gradient(top, #c98a2b, #dde93e);
        background-image: -o-linear-gradient(top, #c98a2b, #dde93e);
        background-image: linear-gradient(top, #c98a2b, #dde93e);
        background-repeat: repeat-x;
        border: 1px solid #dde93e;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .btn-primary:hover,
    .btn-primary:active {
        background-color: #dde93e;
    }

    .btn-block {
        width: 100%;
        display: block;
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
    }

    .bodyStyle {
        height: 100vh;
        font-family: "Open Sans", sans-serif;
        background: #d0df06;
        background: -moz-radial-gradient(
                0% 100%,
                ellipse cover,
                rgba(104, 128, 138, 0.4) 10%,
                rgba(138, 114, 76, 0) 40%
            ),
            -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
                            42,
                            60,
                            87,
                            0.4
                        )
                        100%),
            -moz-linear-gradient(-45deg, #dde93e 0%, #a05e07 100%);
        background: -webkit-radial-gradient(
                0% 100%,
                ellipse cover,
                rgba(104, 128, 138, 0.4) 10%,
                rgba(138, 114, 76, 0) 40%
            ),
            -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
                            42,
                            60,
                            87,
                            0.4
                        )
                        100%),
            -webkit-linear-gradient(-45deg, #dde93e 0%, #a05e07 100%) !important;
        background: -o-radial-gradient(
                0% 100%,
                ellipse cover,
                rgba(104, 128, 138, 0.4) 10%,
                rgba(138, 114, 76, 0) 40%
            ),
            -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
                            42,
                            60,
                            87,
                            0.4
                        )
                        100%),
            -o-linear-gradient(-45deg, #dde93e 0%, #a05e07 100%);
        background: -ms-radial-gradient(
                0% 100%,
                ellipse cover,
                rgba(104, 128, 138, 0.4) 10%,
                rgba(138, 114, 76, 0) 40%
            ),
            -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
                            42,
                            60,
                            87,
                            0.4
                        )
                        100%),
            -ms-linear-gradient(-45deg, #dde93e 0%, #a05e07 100%);
        background: -webkit-radial-gradient(
                0% 100%,
                ellipse cover,
                rgba(104, 128, 138, 0.4) 10%,
                rgba(138, 114, 76, 0) 40%
            ),
            linear-gradient(
                to bottom,
                rgba(57, 173, 219, 0.25) 0%,
                rgba(42, 60, 87, 0.4) 100%
            ),
            linear-gradient(135deg, #dde93e 0%, #a05e07 100%);
    }

    .login {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -150px 0 0 -150px;
        width: 300px;
        height: 300px;
    }

    .login h1 {
        color: #ffffff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
        text-align: center;
    }

    input {
        width: 100%;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        outline: none;
        padding: 10px;
        font-size: 13px;
        color: #ffffff;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
            0 1px 1px rgba(255, 255, 255, 0.2);
        -webkit-transition: box-shadow 0.5s ease;
        -moz-transition: box-shadow 0.5s ease;
        -o-transition: box-shadow 0.5s ease;
        -ms-transition: box-shadow 0.5s ease;
        transition: box-shadow 0.5s ease;
    }

    input:focus {
        box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
            0 1px 1px rgba(255, 255, 255, 0.2);
    }
    input::placeholder {
        color: #dbdada;
    }
</style>
