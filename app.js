const url = "https://api.github.com/users";
const searchbar = document.querySelector("#searchinput");
const serchbtn = document.querySelector("#searchbtn");
let procon= document.querySelector(".profilecontainer");
let load = document.querySelector(".loading");

const genprofile = (profile)=>{
return ( 
` <div class="profile-box">
<div class="top-section">
  <div class="left">
    <div class="avatar">
      <img alt="avatar" src="${profile.avatar_url}" />
    </div>
    <div class="self">
      <h1>${profile.name}</h1>
      <h1>@${profile.login}</h1>
    </div>
  </div>
  <a href="${profile.html_url}" target="_black">
  <button id="searchbtn">Check Profile</button>
  </a>
</div>

<div class="about">
  <h2>About</h2>
  <p>
  ${profile.bio}
  </p>
</div>
<div class="status">
  <div class="status-item">
    <h3>Followers</h3>
    <p>${profile.followers}</p>
  </div>
  <div class="status-item">
    <h3>Followings</h3>
    <p>${profile.following}</p>
  </div>
  <div class="status-item">
    <h3>Repos</h3>
    <p>${profile.public_repos}</p>
  </div>
</div>
</div>
`);
};


const fetchprofapi =async()=>{
  var username = searchbar.value;
  load.innerText = "Loading ......";
  load.style.color = "black";
  try {
    const res = await fetch(`${url}/${username}`) 
    var data = await res.json();

    if(data.bio){
      load.innerText = " ";
procon.innerHTML = genprofile(data);
    }
    else{
      load.innerHTML = data.message;
      load.style.color = "red";
      procon.innerText = " ";
    }
    console.log("data",data);
  } catch (error) {
    load.innerText = " ";
  }
};


serchbtn.addEventListener("click",fetchprofapi);

