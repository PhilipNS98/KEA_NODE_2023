<script>
    // import { navigate } from "svelte-routing";
    import { BASE_AUTH_URL, SESSION } from "../../store/globalsStore";
    import {useNavigate, useLocation} from "svelte-navigator"

	const navigate = useNavigate();
	const location = useLocation();

    async function handleLogout(event) {
        event.preventDefault(); // prevent default form submission behavior

        try {
            const response = await fetch($BASE_AUTH_URL + "/logout");

            $SESSION = null;

            navigate("/", { replace: true });

        } catch (error) {
            console.error(error); // replace with desired error handling
        }
    }
</script>


<a class="nav-link" href="/logout" id="loginLink" on:click={handleLogout}>Logout</a>
