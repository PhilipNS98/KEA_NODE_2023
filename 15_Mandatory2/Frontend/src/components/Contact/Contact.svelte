<script>
    import {BASE_URL} from "../../store/globalsStore.js"
    import {useNavigate} from "svelte-navigator"

    const navigate = useNavigate();

    let subject;
    let email;
    let message;
async function handleNodeMailer(event){
    event.preventDefault(); // prevent default form submission behavior
        const mailInfo = { subject: subject, email: email, message: message };

        try {
            const response = await fetch($BASE_URL + "/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mailInfo),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                navigate("/", { replace: true });
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


<div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8">
        <h1 class="text-center mb-4">Contact Us</h1>
        <form on:submit={handleNodeMailer} class="form" action="/api/contact" method="POST">
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Enter subject" name="subject" bind:value={subject}>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" bind:value={email}>
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Write your message..."
              name="message" bind:value={message}></textarea>
          </div>
  
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-primary col-6 mt-5">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>