    // Calling & Call History
    let callHistory = [];

    document.getElementById('btn-national-emer').addEventListener('click', function(e) {
    e.preventDefault();

    const numberElement = document.getElementById('call-emer');
    const nameElement = document.getElementById('name-national-emer');
    const number = numberElement.innerText;
    const name = nameElement.innerText;

    alert(`Calling ${number}`);

    const now = new Date();
    const timeString = now.toLocaleString();

    callHistory.push({name: name, number: number, time: timeString });

    const callHistoryList = document.getElementById("call-history-list");
    const li = document.createElement("li");
    li.innerHTML =`
    <div class="flex flex-col">
    <span class="font-semibold text-gray-800">${name}</span>
    <span class="text-gray-600 text-center text-xl">${number}</span>            
    </div><span class="text-gray-400 text-sm">${timeString}</span>`;

    li.classList.add("bg-[#F5FFF6]", "p-5", "rounded-lg", "shadow", "text-gray-700", "flex", "justify-between", "items-center", "my-3");
    callHistoryList.appendChild(li);
});

    // Heart Score Board
    const hearts = document.getElementsByClassName('img-heart');
console.log(hearts)
    for (let heart of hearts) {
    heart.addEventListener('click', function(e) {
        e.preventDefault();

        const point = 1;
        const availdPoint = parseInt(document.getElementById('heart-score-board').innerText) || 0;
        const totalPoints = point + availdPoint;
        document.getElementById('heart-score-board').innerText = totalPoints;
    });
}


    // Icon Score Board

    document.getElementsByClassName('btn-copy').addEventListener('click', function(e) {
    e.preventDefault()
    
    const point = 1  
    const availdPoint = parseInt(document.getElementById('heart-score-board').innerText) || 0
    const totalPoints = point + availdPoint
    document.getElementById('heart-score-board').innerText = totalPoints
})
