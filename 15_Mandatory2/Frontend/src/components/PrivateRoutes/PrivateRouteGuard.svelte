<script>
// @ts-nocheck

	import {useNavigate, useLocation} from "svelte-navigator";
	import { SESSION } from "../../store/globalsStore.js";


	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$SESSION) {
		navigate("/login", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $SESSION}
	<slot />
{/if}