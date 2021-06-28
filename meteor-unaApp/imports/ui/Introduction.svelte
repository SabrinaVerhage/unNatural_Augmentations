<script context="module">
  export let introstate = 0;

  export function changeIntroState(newState) {
    if(introstate != newState) {
      introstate = newState;
    }
  }

</script>

{#if introstate === 0}
  <div style='height: 3vmin'></div>
  <h4>(un)natural</h4>
  <h4>augmentations</h4>
  <h5><a href='https://www.deframe.nl/' target='_blank'>Carolien Teunisse</a> & <a href='http://www.sabrinaverhage.com' target='_blank'>Sabrina Verhage</a></h5>
  <div class='textwidth'>
  <p>
  You are invited to discover this work by either exploring found lichen and their (un)natural augmentations or adding new lichen to the ongoing collection.
  </p>
  <p><b>
  Walk around The Hague in the area of The Grey Space in the Middle and explore the map on the next page.
  </b></p>
  <div style='height: 6vmin'></div>
  <h5></h5>
  <p>
  As the pandemic brought the world to a standstill a hopeful eco-centric seed was planted. 
  Relying predominantly on our digital reality brought about a new respect for our direct organic environment. Carolien and Sabrina set out to explore this new found respect by delving into an artistic collaboration with lichens; surprisingly beautiful organisms that can be found almost anywhere in the city. 
  </p>
  <p>
  With their technology-focussed workflow as a starting point the makers hope to establish new relationships with nature that we weren't able to before; creating artistic digital interventions that embrace instead of abrase our organic reality. A much needed change in attitude in this current time of global warming and mass biodiversity loss.
  </p>
  <p>
  (un)natural augmentations aims to let visitors discover the beauty of lichens for themselves by augmenting them with generative virtual art. The work-in-progress shows the current database of found lichens near The Grey Space as well as the current status of Carolien and Sabrina’s artistic collaboration. 
  </p>
  <div style='height: 6vmin'></div>
  <h5>Lichens</h5>
  <p>
  Lichens are a symbiosis between algae and fungi. They can be seen as micro ecosystems of different organisms living together. 
  </p>
  <p>
  They can be found on rocks and tree trunks but also on buildings, benches and sidewalks. There are many types of lichen but only three ways of growing. They can be branched like tiny shrubs, they can have crinkly little leaves or they can grow like a crust on a surface.
  To grow, lichens get their nutrients from the air and are therefore sensitive to air pollution.
  Because they react quickly to environmental change they are great air quality indicators. Two main air pollutants that affect lichen growth are nitrogen and sulphur dioxide. 
  </p>
  <p>
  With (un)natural augmentations new natural/artificial micro ecosystems are created through a collaboration between lichens, pixels and participating humans. Hereby provoking new perspectives of appreciation and connection with our natural biological environment, even in the urban reality of our daily lives. 
  </p>
  </div>
  <div style='height: 6vmin'></div>
{:else if introstate === 1} 
  <div style='height: 3vmin'></div>
  <h5>THANK YOU</h5>
  <div class='textwidth'>
  <p>
    for augmenting the world around us
  </p>
  <div style='height: 3vmin'></div>
  </div>

{/if}

<style>
  h4 {
    margin-bottom: 3vmin;
  }

  h5 {
    margin-bottom: 1vmin;
  }

  p {
    margin-top:  3vmin;
  }

  .textwidth {
    width: 60vmin;
  }

  ol {
    padding-top: 5px;
    padding-left: 20px;
  }

  @media only screen and (max-width: 600px) {
    .textwidth {
      width: 100%;
    }
  }
</style>


