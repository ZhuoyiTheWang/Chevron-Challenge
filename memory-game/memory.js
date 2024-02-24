const selectors = {
    boardContainer: document.querySelector('.container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const questions = [
    //Question 1
    'What is 1+1',
    //Question 2
    'What is 1+2',
    //Question 3
    'What is 1+3',
    //Question 4
    'What is 1+4',
    //Question 5
    'What is 1+5',
    //Question 6
    'What is 1+6',
    //Question 7
    'What is 1+7',
    //Question 8
    'What is 1+8',
]

const answers = [
    // Answer 1
    '2',
    // Answer 2
    '3',
    // Answer 3
    '4',
    // Answer 4
    '5',
    // Answer 5
    '6',
    // Answer 6
    '7',
    // Answer 7
    '8',
    // Answer 8
    '9',
]

const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

    const items = shuffle([...questions, ...answers])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `
    
    const parser = new DOMParser().parseFromString(cards, 'text/html')

    selectors.board.replaceWith(parser.querySelector('.board'))
}

const startGame = () => {
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    state.loop = setInterval(() => {
        state.totalTime += 0.1
        state.totalTime = Math.round(state.totalTime * 10) / 10

        selectors.moves.innerText = `${state.totalFlips} moves`
        selectors.timer.innerText = `time: ${state.totalTime} sec`
    }, 100)
}

const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}

const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (questions.indexOf(flippedCards[0].innerText) == answers.indexOf(flippedCards[1].innerText) && answers.indexOf(flippedCards[1].innerText) != -1  
        || answers.indexOf(flippedCards[0].innerText) == questions.indexOf(flippedCards[1].innerText) && questions.indexOf(flippedCards[1].innerText) != -1)
        {
            setTimeout(function(){
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
            }, 600);
        }
        
        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }

    // If there are no more cards that we can flip, we won the game
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = 
            `
                <span class="win-text">
                    All correct!<br/>
                    in <span class="highlight">${state.totalFlips}</span> moves<br/>
                    at <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `

            clearInterval(state.loop)
        }, 1000)
    }
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

generateGame()
attachEventListeners()