

//  fetch('http://localhost:3000/welcome').then((link)=>
// {
    
//       return link.json()
// }).then(function(data) {
//        const charactersDiv = document.querySelector('#link');
//       const characterElement = document.createElement('p');
//       characterElement.innerText = `Character Name: ${data}`;
//       charactersDiv.append(characterElement);
//     console.log(data); // this will be a string

//   });

  function enableLink()
  {
    user=search.value
    document.getElementById('send').innerText="LOADING..."
    fetch(`http://localhost:3000/dp?user=${user}`,).then((link)=>
    {
            return link.json()
      }).then(function(data) {
          //    const charactersDiv = document.querySelector('#link');
          //   const characterElement = document.createElement('p');
          //   characterElement.innerText = `Character Name: ${data.link}`;
          //   //document.getElementById('fullDp').setAttribute('src',data.link)
          //   charactersDiv.append(characterElement);
          // console.log(data); // this will be a string
          // location.href=data.link
          if(data.link=="err")
          {
            console.log("err")
            document.getElementById('send').innerText="ENTER"
            document.getElementById('view-button').style.display="none"
            document.getElementById('button-dp').style.display="none"
            document.getElementById('userName').innerText="- NIL -"
            document.getElementById('fullName').innerText="- NIL -"
            document.getElementById('biography').innerText="- NIL -"
            document.getElementById('followersCount').innerText="- NIL -"
            document.getElementById('followingCount').innerText="- NIL -"
            document.getElementById('numberOfPosts').innerText="- NIL -"
            document.getElementById('isPrivate').innerText="- NIL -"
          }
          else{
            console.log(data)
            document.getElementById('send').innerText="ENTER"
            document.getElementById('view-button').style.display="inline"
            document.getElementById('button-dp').style.display="inline"
            document.getElementById('view-button').setAttribute('href',data.link)
            console.log("----------------------------------------------------"+data.username)
            document.getElementById('userName').innerText=data.username
            document.getElementById('fullName').innerText=data.full_name
            document.getElementById('biography').innerText=data.biography
            document.getElementById('followersCount').innerText=data.edge_followed_by.count
            document.getElementById('followingCount').innerText=data.edge_follow.count
            document.getElementById('numberOfPosts').innerText=data.edge_owner_to_timeline_media.count
            document.getElementById('isPrivate').innerText=data.is_private
          }
          
        }).catch((data)=>
        {
          document.getElementById('send').innerText="ENTER"
          document.getElementById('view-button').style.display="none"
          document.getElementById('button-dp').style.display="none"
            document.getElementById('userName').innerText="- NIL -"
            document.getElementById('fullName').innerText="- NIL -"
            document.getElementById('biography').innerText="- NIL -"
            document.getElementById('followersCount').innerText="- NIL -"
            document.getElementById('followingCount').innerText="- NIL -"
            document.getElementById('numberOfPosts').innerText="- NIL -"
            document.getElementById('isPrivate').innerText="- NIL -"
        });
  }


// })
// fetch('http://localhost:3000/welcome', {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     },
//     credentials: "same-origin"
//   }).then(function(response) {
//     response.status     //=> number 100–599
//     response.statusText //=> String
//     response.headers    //=> Headers
//     response.url        //=> String
  
//     return response.text()
//   }, function(error) {
//     error.message //=> String
//   })