async function loadGithubCalendar(year) {

  const response = await fetch("./data/contributions.json");
  const github = await response.json();

  const calendar =
    github.data.user.contributionsCollection.contributionCalendar;


  const calendarBox =
    document.getElementById("github-calendar");

  calendarBox.innerHTML = "";


  let total = 0;


  calendar.weeks.forEach(week => {

    week.contributionDays.forEach(day => {


      const dateYear =
        new Date(day.date).getFullYear();


      if (dateYear == year) {

        total += day.contributionCount;


        const square =
          document.createElement("div");


        square.className =
          "w-3 h-3 rounded-sm";


        square.style.backgroundColor =
          day.color;


        square.title =
          `${day.date}: ${day.contributionCount} contributions`;


        calendarBox.appendChild(square);

      }

    });

  });


  document.getElementById("github-total").innerText =
    total;


  document.getElementById("github-year").innerText =
    year;

}


// default year
loadGithubCalendar(2026);