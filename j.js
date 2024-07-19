// const addQuestion = (Main, text) => {
//     const time = new Date().toLocaleTimeString();
//     Main.innerHTML += `
//         <div class="row">
//             <div class="chat question shadow">${text}</div>
//             <div class="timestamp">${time}</div>
//         </div>
//     `;
// };

// const addAnswer = (Main, text) => {
//     const time = new Date().toLocaleTimeString();
//     const answerDiv = document.createElement("div");
//     answerDiv.className = "row chat-message answer typing";
//     answerDiv.innerHTML = `
//         <div class="chat-bubble">
//             <div class="typing-indicator">
//                 <span></span><span></span><span></span>
//             </div>
//         </div>
//         <div class="timestamp">${time}</div>
//     `;
//     Main.appendChild(answerDiv);

//     setTimeout(() => {
//         answerDiv.innerHTML = `
//             <div class="chat answer shadow">${text}</div>
//             <div class="timestamp">${time}</div>
//         `;
//         answerDiv.classList.remove("typing");
//         answerDiv.classList.add("bounce");

//         // Remove bounce animation after 1 second
//         setTimeout(() => {
//             answerDiv.classList.remove("bounce");
//         }, 1000);
//     }, 1000);
// };

// D.addEventListener("DOMContentLoaded", () => {
//     const Main = element("main");
//     const Askbtn = element("button");
//     const Question = element("input");
//     const Lastdiv = element("#last");

//     let User = prompt("Holla, I'm Mimo. And you? 😁");

//     while (User === null || User === '') {
//         User = prompt("Please, what is your name? 😊");
//     }

//     Question.focus();

//     const Ask = () => {
//         const Text = Question.value;

//         if (Text.length) {
//             addQuestion(Main, Text);
//             Question.value = "";

//             Answer(Main, User, Text);

//             Lastdiv.scrollIntoView();
//         }
//     };

//     Askbtn.addEventListener("click", Ask);

//     Question.addEventListener("keyup", function (event) {
//         if (event.keyCode === 13) Ask();
//     });

//     addAnswer(Main, `Hello ${User}, I am Mimo😎. How can I help`);
// });

// 2

// const addQuestion = (Main, text) => {
//     const time = new Date().toLocaleTimeString();
//     Main.innerHTML += `
//         <div class="row">
//             <div class="chat question shadow">${text}</div>
//             <div class="timestamp">${time}</div>
//         </div>
//     `;
//     saveChat(Main.innerHTML);
// };

// const addAnswer = (Main, text) => {
//     const time = new Date().toLocaleTimeString();
//     const answerDiv = document.createElement("div");
//     answerDiv.className = "row chat-message answer typing";
//     answerDiv.innerHTML = `
//         <div class="chat-bubble">
//             <div class="typing-indicator">
//                 <span></span><span></span><span></span>
//             </div>
//         </div>
//         <div class="timestamp">${time}</div>
//     `;
//     Main.appendChild(answerDiv);

//     setTimeout(() => {
//         answerDiv.innerHTML = `
//             <div class="chat answer shadow">${text}</div>
//             <div class="timestamp">${time}</div>
//         `;
//         answerDiv.classList.remove("typing");
//         answerDiv.classList.add("bounce");

//         // Remove bounce animation after 1 second
//         setTimeout(() => {
//             answerDiv.classList.remove("bounce");
//         }, 1000);
//         saveChat(Main.innerHTML);
//     }, 1000);
// };

// const saveChat = (chat) => {
//     localStorage.setItem("chat", chat);
// };

// const loadChat = () => {
//     return localStorage.getItem("chat");
// };

// const saveUserName = (user) => {
//     localStorage.setItem("username", user);
// };

// const loadUserName = () => {
//     return localStorage.getItem("username");
// };

// const saveKnowledgeBase = (knowledgeBase) => {
//     localStorage.setItem("knowledgeBase", JSON.stringify(knowledgeBase));
// };

// const loadKnowledgeBase = () => {
//     const data = localStorage.getItem("knowledgeBase");
//     return data ? JSON.parse(data) : {};
// };

// D.addEventListener("DOMContentLoaded", () => {
//     const Main = document.querySelector("main");
//     const Askbtn = document.querySelector("button");
//     const Question = document.querySelector("input");
//     const Lastdiv = document.querySelector("#last");

//     let User = loadUserName();
//     let knowledgeBase = loadKnowledgeBase();

//     const savedChat = loadChat();
//     if (savedChat) {
//         Main.innerHTML = savedChat;
//     }

//     if (!User) {
//         User = prompt("Holla, I'm Mimo. And you? 😁");

//         while (User === null || User === '') {
//             User = prompt("Please, what is your name? 😊");
//         }
//         saveUserName(User);
//     }

//     Question.focus();

//     const Ask = () => {
//         const Text = Question.value;

//         if (Text.length) {
//             addQuestion(Main, Text);
//             Question.value = "";

//             Answer(Main, User, Text);

//             Lastdiv.scrollIntoView();
//         }
//     };

//     Askbtn.addEventListener("click", Ask);

//     Question.addEventListener("keyup", function (event) {
//         if (event.keyCode === 13) Ask();
//     });

//     const Answer = (Main, user, text) => {
//         const lowerText = text.toLowerCase();

//         if (lowerText.includes("change my name") || lowerText.includes("call me")) {
//             let newName = prompt("Sure, what would you like me to call you?");
//             while (newName === null || newName === '') {
//                 newName = prompt("Please enter a valid name 😊");
//             }
//             saveUserName(newName);
//             User = newName;
//             addAnswer(Main, `Got it, I will call you ${User} from now on.`);
//         } else if (knowledgeBase[lowerText]) {
//             addAnswer(Main, knowledgeBase[lowerText]);
//         } else {
//             let newKnowledge = prompt(`I don't know the answer to "${text}". Can you tell me what it means?`);
//             if (newKnowledge !== null && newKnowledge.trim() !== '') {
//                 knowledgeBase[lowerText] = newKnowledge;
//                 saveKnowledgeBase(knowledgeBase);
//                 addAnswer(Main, `Got it, I have learned that "${text}" means "${newKnowledge}".`);
//             } else {
//                 addAnswer(Main, "Sorry, I still don't understand that.");
//             }
//         }
//     };

//     addAnswer(Main, `Hello ${User}, I am Mimo😎. How can I help?`);
// });

// 3

const addQuestion = (Main, text) => {
    const time = new Date().toLocaleTimeString();
    Main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
            <div class="timestamp">${time}</div>
        </div>
    `;
    saveChat(Main.innerHTML);
};

const addAnswer = (Main, text) => {
    const time = new Date().toLocaleTimeString();
    const answerDiv = document.createElement("div");
    answerDiv.className = "row chat-message answer typing";
    answerDiv.innerHTML = `
        <div class="chat-bubble">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="timestamp">${time}</div>
    `;
    Main.appendChild(answerDiv);

    setTimeout(() => {
        answerDiv.innerHTML = `
            <div class="chat answer shadow">${text}</div>
            <div class="timestamp">${time}</div>
        `;
        answerDiv.classList.remove("typing");
        answerDiv.classList.add("bounce");

        // Remove bounce animation after 1 second
        setTimeout(() => {
            answerDiv.classList.remove("bounce");
        }, 1000);
        saveChat(Main.innerHTML);
    }, 1000);
};

const saveChat = (chat) => {
    localStorage.setItem("chat", chat);
};

const loadChat = () => {
    return localStorage.getItem("chat");
};

const saveUserName = (user) => {
    localStorage.setItem("username", user);
};

const loadUserName = () => {
    return localStorage.getItem("username");
};

D.addEventListener("DOMContentLoaded", () => {
    const Main = document.querySelector("main");
    const Askbtn = document.querySelector("button");
    const Question = document.querySelector("input");
    const Lastdiv = document.querySelector("#last");

    let User = loadUserName();

    const savedChat = loadChat();
    if (savedChat) {
        Main.innerHTML = savedChat;
    }

    if (!User) {
        User = prompt("Holla, I'm Mimo. And you? 😁");

        while (User === null || User === '') {
            User = prompt("Please, what is your name? 😊");
        }
        saveUserName(User);
    }

    Question.focus();

    const Ask = () => {
        const Text = Question.value;

        if (Text.length) {
            addQuestion(Main, Text);
            Question.value = "";

            Answer(Main, User, Text);

            Lastdiv.scrollIntoView();
        }
    };

    Askbtn.addEventListener("click", Ask);

    Question.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) Ask();
    });

    const Answer = (Main, user, text) => {
        if (text.toLowerCase().includes("change my name") || text.toLowerCase().includes("call me")) {
            let newName = prompt("Sure, what would you like me to call you?");
            while (newName === null || newName === '') {
                newName = prompt("Please enter a valid name 😊");
            }
            saveUserName(newName);
            User = newName;
            addAnswer(Main, `Got it, I will call you ${User} from now on.`);
        } else {
            const responses = {
                "hi": `Hello ${user}, how can I help you?`,
                "how are you": `I'm good, ${user}. How about you?`,
                "what's your name": `My name is Mimo.`,
                "bye": `Goodbye ${user}, have a great day!`,
                "help": `I can help with many things, ${user}. What do you need assistance with?`,
                "weather": `You can check the weather at: https://www.weather.com`,
                "news": `You can read the latest news at: https://www.bbc.com/news`,
            };
            const response = responses[text.toLowerCase()] || "Sorry, I didn't understand that.";
            addAnswer(Main, response);
        }
    };

    addAnswer(Main, `Hello ${User}, I am Mimo😎. How can I help?`);
});
