    // Heart and Copying ‍Score

function numberInc(buttonClass, scoreBoardId) {
    const buttons = document.getElementsByClassName(buttonClass);
    for (let btn of buttons) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const point = 1;
            const availdPoint = parseInt(document.getElementById(scoreBoardId).innerText) || 0;
            document.getElementById(scoreBoardId).innerText = availdPoint + point;
        });
    }
}
numberInc('img-heart', 'heart-score-board');
numberInc('button-copy', 'copy-score-board');

    // Clear History
      const clearBtn = document.getElementById('clear-btn');
        const callHistoryList = document.getElementById('call-history-list');

        clearBtn.addEventListener('click', function(e) {
        e.preventDefault();
        callHistoryList.innerHTML = '';
        callHistory = [];
    });
  
    // Calling & History
    
    let callHistory = [];
    let coins = 100;
    const coinScoreBoard = document.getElementById("icon-score-board");
    const copyScoreBoard = document.getElementById("copy-score-board");

    function calling(buttonId, numberId, nameId) {
        document.getElementById(buttonId).addEventListener('click', function(e) {
        e.preventDefault();

        const numberElement = document.getElementById(numberId);
        const nameElement = document.getElementById(nameId);
        const number = numberElement.innerText;
        const name = nameElement.innerText;

        if (coins >= 20) {
            coins -= 20;
            coinScoreBoard.innerText = coins;
        } else {
            alert("Sorry! You have no available Coins.");
            return; 
        }
        alert(`Calling ${name} ${number}...`);
        const now = new Date();
        const timeString = now.toLocaleString( 'en-US',{
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric',
            hour12: true
        })
        callHistory.push({ name: name, number: number, time: timeString });
        const callHistoryList = document.getElementById("call-history-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="flex flex-col">
                <span class="text-xl font-semibold text-gray-600">${name}</span>
                <span class="text-gray-700 text-2xl font-bold">${number}</span>            
            </div>
            <span class="text-gray-900 text-lg font-semibold">${timeString}</span>
        `;
        li.classList.add(
            "bg-[#F5FFF6]", "p-5", "rounded-lg", "shadow", 
            "text-gray-700", "flex", "justify-between", 
            "items-center", "my-3"
        );
        callHistoryList.appendChild(li);
    });
}

function copying(buttonId, numberId, scoreBoardId) {
    document.getElementById(buttonId).addEventListener('click', function(e) {
        e.preventDefault();

        const numberElement = document.getElementById(numberId);
        const number = numberElement.innerText;
        alert(`Number has been copied: ${number}`);

        navigator.clipboard.writeText(`${number}`)
        .then(() => {
            (`${number}`);
        });
        const point = 1;
        const availdPoint = parseInt(document.getElementById(scoreBoardId).innerText) || 0;
        document.getElementById(scoreBoardId).innerText = availdPoint + point;
        return
    });
}
calling("btn-national-emer", "call-emer", "name-national-emer");
calling("btn-police", "call-police", "name-police");
calling("btn-fire", "call-fire", "name-fire");
calling("btn-ambulance", "call-ambulance", "name-ambulance");
calling("btn-women", "call-women", "name-women");
calling("btn-anti", "call-anti", "name-anti");
calling("btn-ele", "call-ele", "name-ele");
calling("btn-brac", "call-brac", "name-brac");
calling("btn-rail", "call-rail", "name-rail");

copying("btn-national-emer-copy", "call-emer", "copy-score-board");
copying("btn-police-copy", "call-police", "copy-score-board");
copying("btn-fire-copy", "call-fire", "copy-score-board");
copying("btn-ambulance-copy", "call-ambulance", "copy-score-board");
copying("btn-women-copy", "call-women", "copy-score-board");
copying("btn-anti-copy", "call-anti", "copy-score-board");
copying("btn-ele-copy", "call-ele", "copy-score-board");
copying("btn-brac-copy", "call-brac", "copy-score-board");
copying("btn-rail-copy", "call-rail", "copy-score-board");
