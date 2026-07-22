const DATA_URL = "./data/contributions.json";


let contributions = [];
let years = [];
let selectedYear;



fetch(DATA_URL)
    .then(response => response.json())
    .then(data => {


        const weeks =
            data.data.user
                .contributionsCollection
                .contributionCalendar
                .weeks;



        weeks.forEach(week => {

            week.contributionDays.forEach(day => {

                contributions.push(day);

            });

        });



        years = [
            ...new Set(
                contributions.map(day =>
                    new Date(day.date)
                        .getFullYear()
                )
            )
        ];



        years.sort(
            (a, b) => b - a
        );



        selectedYear = years[0];


        createYearButtons();


        renderCalendar(selectedYear);



    })
    .catch(error => {

        console.error(
            "JSON Error:",
            error
        );

    });






function createYearButtons() {


    const yearBox =
        document.getElementById(
            "github-years"
        );


    yearBox.innerHTML = "";



    years.forEach(year => {


        const button =
            document.createElement("button");



        button.innerText = year;



        button.className =
            `
        px-4 py-1
        rounded-full
        border
        text-sm
        transition
        `;



        if (year === selectedYear) {

            button.classList.add(
                "bg-indigo-600",
                "text-white"
            );

        }




        button.onclick = () => {


            selectedYear = year;



            document
                .querySelectorAll(
                    "#github-years button"
                )
                .forEach(btn => {

                    btn.classList.remove(
                        "bg-indigo-600",
                        "text-white"
                    );

                });



            button.classList.add(
                "bg-indigo-600",
                "text-white"
            );



            renderCalendar(year);



        };



        yearBox.appendChild(button);


    });


}









function renderCalendar(year) {


    const calendar =
        document.getElementById(
            "github-calendar"
        );



    calendar.innerHTML = "";



    const now = new Date();



    const filtered =
        contributions.filter(day => {


            const date =
                new Date(day.date);



            /*
              Hide future dates
            */

            if (date > now) {

                return false;

            }



            return (
                date.getFullYear()
                === year
            );


        });





    let total = 0;

    let active = 0;




    filtered.forEach(day => {


        total +=
            Number(day.contributionCount);



        if (day.contributionCount > 0) {

            active++;

        }



        const box =
            document.createElement("div");



        box.className =
            `
w-[11px]
h-[11px]
rounded-sm
${day.color}
`;



        box.style.backgroundColor =
            day.color;



        box.title =
            `${day.date}
${day.contributionCount} contributions`;



        calendar.appendChild(box);



    });





    document
        .getElementById(
            "github-total"
        )
        .innerText = total;




    document
        .getElementById(
            "github-year"
        )
        .innerText = year;




    document
        .getElementById(
            "active-days"
        )
        .innerText = active;



}