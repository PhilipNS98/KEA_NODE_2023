<script>
    import {fridgeMessages} from "../../store/fridgeMessage.js"

    function eraseFridgeMessages(){
        fridgeMessages.set([]);
    }

</script>

<!--Dollarsign gives you the value-->
<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>


<slot></slot>



<p>--------------------------------------</p>
<p>|&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    Welcome
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|</p>
<p>--------------------------------------</p>