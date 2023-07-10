<script>
	import Slider from '@bulatdashiev/svelte-slider';

	export let data;
	console.log("client data: ", data);

    let priceChanged = false;
    let accessibilityChanged = false;


    let participantsVar = 2;

    let priceVar = 0;
    $: priceDecimal = priceVar/10;

    let accessibilityVar = 0;
    $: accessibilityDecimal = accessibilityVar/10;

    
    let typeVar = 0;
    $: queryString = '?participants=' + participantsVar 
    // let queryString = '?participants=' + participantsVar +'&type' + typeVar + '?accessibility' + accessibilityVar;

    function takePrice() {
        priceChanged = true;
    } 

    function takeAccessibility()
    {
        accessibilityChanged = true;

    }
    async function fetchApi() {
        try {

            if(priceChanged) {
                // update the query string with new values
                queryString += '&price'+ priceDecimal;
            }

            if(accessibilityChanged) {
                // update the query string with new values
                queryString += '&accessibility'+ accessibilityDecimal;
            }
            const response = await fetch('http://www.boredapi.com/api/activity/' + queryString);
            const newData = await response.json();
            console.log("button-fetch:", newData);
            data = newData;
        } catch (error) {
            console.error(error);
        }
    } 
    

</script>




  

  <style>

@font-face {
    font-family: 'SF Mono';
    src: url('../fonts/SFMono-Regular.otf') format('opentype');

  }
    :global(body) {
      background-color: #222;
      color: #fff;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  
    .slider-section {
      width: 80%; /* Adjust the width as desired */
      margin-bottom: 2rem; /* Increase the margin bottom for spacing */
    }
  
    .activity {
      margin-top: 2rem;
    }
  
    .type {
      margin-bottom: 1rem;
    }
  
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  
    input[type="range"] {
      width: 100%;
      margin-top: 0.25rem;
    }
  
    button {
      display: block;
      background-color: purple;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
  
    button:hover {
      background-color: darkpurple;
    }

    @font-face {
    font-family: 'SF Mono';
    src: url('../fonts/SFMono-Regular.otf') format('opentype');

  }

  h1,
  h2,
  label,
  input[type="range"],
  button {
    font-family: 'SF Mono', monospace;
  }

  
  </style>



  
  <div class="container">
    <h1 class="activity">Your activity for today is {data?.activity}</h1>
    <h2 class="type">Type    {data?.type}</h2>
  
    <div class="slider-section">
      <label for="participants">Participants: {participantsVar}</label>
      <input type="range" bind:value={participantsVar} min="0" max="4" id="participants">
    </div>
  
    <div class="slider-section">
      <label for="price">Price: {priceDecimal}</label>
      <input type="range" bind:value={priceVar} min="0" max="10" id="price" on:input={takePrice}>
    </div>
  
    <div class="slider-section">
      <label for="accessibility">Accessibility: {accessibilityDecimal}</label>
      <input type="range" bind:value={accessibilityVar} min="0" max="10" id="accessibility" on:input={takeAccessibility}>
    </div>
  
    <button on:click={fetchApi}>Create</button>
  </div>
  