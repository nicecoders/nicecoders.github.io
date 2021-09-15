const ApifyClient = require('apify-client');

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'bmzDCypFB3dFEcRCC3WQFTqw4',
});

// Prepare actor input
const input = {
  startUrls: ['https://shop.nordstrom.com/s/born-uchee-knee-high-boot-regular-wide-calf/5243853/full'],
  search: "Jeans",
  proxy: {
      useApifyProxy: true
  }
};

(async () => {
    // Run the actor and wait for it to finish
    const run = await client.actor("trudax/actor-nordstrom-scraper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log(items)
    items.forEach((item) => {
        console.dir(item);
    });
})();