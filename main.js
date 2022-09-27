/*
Task 1
=======
    Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const allP = document.querySelectorAll('p')

if (allP.length === 6) {
    console.log(allP)
};

// 2

const firstDiv = document.querySelector('.site-header container')
console.log(firstDiv)

// 3

const firstId = document.getElementById('#jumbotron-text')
console.log(firstId)

// 4

const allP1 = document.querySelector('.primary-content p')
console.log(allP1)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector('#alertBtn')

alertBtn.addEventListener('click', function () {
    alert('Thanks for visiting Bikes for Refugees!')
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const colorButton = document.querySelector('#bgrChangeBtn')
colorButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addSomeTextBtn = document.querySelector('#addTextBtn')
const newParagraph = document.createElement('p')

addSomeTextBtn.addEventListener('click', function (){
    newParagraph.innerHTML = 'Read more below'
    addSomeTextBtn.appendChild(newParagraph);
})

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


const link123 = document.querySelectorAll('.article-title.article-title--sidebar a, .facebook-link')
const largerLinksBtn = document.querySelector('#largerLinksBtn')
largerLinksBtn.addEventListener('click', function (){
    for (let i = 0; i < link123.length; i++) {
        link123[i].style.fontSize = 'x-large';
    }})
