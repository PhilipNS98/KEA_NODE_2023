<script>
    // @ts-nocheck

    import Navbar from "./components/Navbar/Navbar.svelte";
    import Home from "./components/Home/Home.svelte";
    import Contact from "./components/Contact/Contact.svelte";
    import Login from "./components/Login/Login.svelte";
    // import { Router, Route } from "svelte-routing";
    import { Router, Route } from "svelte-navigator"
    import SignUp from "./components/SignUp/SignUp.svelte";
    import PrivateRoute from "./components/PrivateRoutes/PrivateRoute.svelte";
    import { SESSION } from "./store/globalsStore";
    import {onMount} from "svelte"
    import Cookies from "js-cookie";

    // define routes
    /* const routes = {
        "/": Home,
        "/contact": Contact,
        "/login": Login,
        "/signUp": SignUp,
    }; */

    onMount(() => {
        const user = Cookies.get('user');
        if (user) {
            $SESSION = JSON.parse(user)
        }
    })
</script>

<!-- <Router {routes}> -->
<Router>
    <Navbar />
    <main>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp}/>
        <PrivateRoute path="/contact" let:location>
            <!-- <Route path="/contact" component={Contact} /> -->
            <Contact />
        </PrivateRoute>
    </main>
</Router>

<style>
</style>
