<script>
    import { SESSION } from "../../store/globalsStore";
    import Logout from "../Logout/Logout.svelte";
    import { link } from "svelte-navigator"
</script>

<header>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img id="logo" src="src/assets/images/MandatoryLogo2.png" width="100%" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/" use:link>Home</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item" id="adminPanelCreated"></li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact" use:link>Contact Us</a>
                    </li>
                    <li class="nav-item">
                        {#if $SESSION}
                        <Logout />
                        {:else}
                        <a class="nav-link" href="/login" id="loginLink">Login</a>
                        {/if}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
    #logo{
    max-width: 5em;
}
</style>