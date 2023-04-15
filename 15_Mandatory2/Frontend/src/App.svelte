<script>
    // @ts-nocheck

    import Navbar from "./components/Navbar/Navbar.svelte";
    import Home from "./components/Home/Home.svelte";
    import Contact from "./components/Contact/Contact.svelte";
    import Login from "./components/Login/Login.svelte";
    import { Router, Route } from "svelte-routing";

    // define routes
    const routes = {
        "/": Home,
        "/contact": Contact,
        "/login": Login,
    };
</script>

<Router {routes}>
    <Navbar />
    <main>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
    </main>
</Router>

<style>
</style>
