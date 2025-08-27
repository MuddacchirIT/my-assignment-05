
     // Heart and Copy ‍Score

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
  
    // Call & History
    
    let callHistory = [];

    function calling(buttonId, numberId, nameId) {
        document.getElementById(buttonId).addEventListener('click', function(e) {
        e.preventDefault();

        const numberElement = document.getElementById(numberId);
        const nameElement = document.getElementById(nameId);
        const number = numberElement.innerText;
        const name = nameElement.innerText;

        alert(`Calling ${number}`);

        const now = new Date();
        const timeString = now.toLocaleString();

    
        callHistory.push({ name: name, number: number, time: timeString });

        const callHistoryList = document.getElementById("call-history-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="flex flex-col">
                <span class="font-semibold text-gray-800">${name}</span>
                <span class="text-gray-600 text-center text-xl">${number}</span>            
            </div>
            <span class="text-gray-400 text-sm">${timeString}</span>
        `;
        li.classList.add(
            "bg-[#F5FFF6]", "p-5", "rounded-lg", "shadow", 
            "text-gray-700", "flex", "justify-between", 
            "items-center", "my-3"
        );
        callHistoryList.appendChild(li);
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


