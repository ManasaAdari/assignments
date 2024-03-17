<script>const api = 'ex.json';

  fetch(api, {method : 'GET'})
    .then(response => {
      if (response.ok)
      {
          return response.json();
      }
      else
      {
          throw new Error('presence of error');
      }
      })
  
    .then(data => {
      console.log('Data from API(json file): ', data);
    })
  
    .catch(error => {
      console.error('Error:', error);
    });
  
              
</script>


//ex.json
[

    {
        "intern name":"pranusys",
        "week":3,
        "level":"medium"
    },
    {
        "name":"manasa",
        "qual":"B.Tech"
    }
]
