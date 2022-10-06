function change_details(tab) {
  var match = {
    'general': `
            <table class="table">
            <tbody>
            <tr class="table-striped">
                <th>Full Name</th>
                <td>Louise Angeline Christie</td>
            </tr>
            <tr>
                <th>Nickname</th>
                <td>Angie</td>
            </tr>
            <tr class="table-striped">
                <th>Age</th>
                <td>19 (soon to be 20!)</td>
            </tr>
            <tr>
                <th>Fun fact</th>
                <td>I'm not fun :(</td>
            </tr>
            </tbody>
        </table>
        `,
    'skills': `
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        `,
    'spotify': `
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4xV3f6Xa08sVf2P8wIpdbr?utm_source=generator&theme=0" width="75%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `
  };

  document.getElementsByClassName("about-tab").setAttribute("class", "nav-link about-tab");

  document.getElementById(`about-${tab}`).setAttribute("class", "nav-link about-tab active");

  console.log(match[tab]);

  document.getElementById("about-details").innerHTML = match[tab]
}


function rickrolled() {
    document.getElementById("rickrolled").innerHTML="Congrats u just got rickrolled :)"
}