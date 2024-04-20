
const menubtn = document.querySelector('.menu-button-img');
const menubuttoncontent = document.querySelector('.menubuttoncontent');
const body = document.querySelector('body')
menubtn.addEventListener('click',()=>{
    menubuttoncontent.classList.toggle('active');

})
document.addEventListener('click', function(event) {
    const menubtn = document.querySelector('.menu-button-img');
    const menubuttoncontent = document.querySelector('.menubuttoncontent');    
    if (!menubtn.contains(event.target) && !menubuttoncontent.contains(event.target)) {
        menubuttoncontent.classList.remove('active');
    }
});
const wrapper = document.querySelector('.wrapper');
const wrapper2 = document.querySelector('.wrapper2');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const btnpopup2 = document.querySelector('.btnlogin-popup2');
const iconclose = document.querySelector('.icon-close');
registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})
loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})
btnpopup.addEventListener('click', ()=>{
    wrapper.classList.toggle('active-popup');
})
iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
})
btnpopup2.addEventListener('click', ()=>{
    wrapper.classList.toggle('active-popup');
})

/* Add post  */
const contain = document.querySelector(".contain"),
categories = contain.querySelector(".post .categories"),
arrowBack = contain.querySelector(".categorie .arrow-back");

categories.addEventListener("click", () => {
  contain.classList.add("active");
});


arrowBack.addEventListener("click", () => {
  contain.classList.remove("active");
});
const columns = document.querySelectorAll('.list li');
columns.forEach(column => {
column.addEventListener('click', () => {

columns.forEach(col => col.classList.remove('active'));

column.classList.add('active');

const categoryName = column.querySelector('.details p').textContent;

const inputLabel = document.querySelector('.input-box label');
inputLabel.textContent = categoryName;
});
});
/*
const plus = document.querySelector(".plus");
const wrapper2 = document.querySelector(".wrapper2");
plus.addEventListener('click',()=>{
    wrapper2.classList.toggle("active");
})*/
const plusButtons = document.querySelectorAll(".plus");
const iconclose2 = document.querySelector('.icon-close .two')


plusButtons.forEach(plusButton => {
    plusButton.addEventListener('click', () => {
        wrapper2.classList.toggle("active");
    });
});
const body3 = document.querySelector(".body3");

plusButtons.forEach(plusButton => {
    plusButton.addEventListener('click', () => {
        body3.classList.toggle("active");
    });
});
/*
iconclose2.addEventListener("click", () => {
    body3.classList.remove('active');
})*/

if (iconclose2) {
    iconclose2.addEventListener('click', () => {
        body3.classList.remove('active');
    });
}

/* 
slide
----------------------------------*/

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

/*
chat*//*
const chatbotToggler = document.querySelector(".chatbot-toggler");

const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const API_KEY = "PASTE-YOUR-API-KEY"; 
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}
const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if(!userMessage) return;


    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


const chatbotToggler2 = document.querySelector(".chatbot-toggler2");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const userList = document.querySelectorAll(".user");

let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

userList.forEach(user => {
    user.addEventListener("click", () => {
        const userId = user.getAttribute("data-user-id");
        chatbox.innerHTML = ""; 
        chatbox.appendChild(createChatLi(`Chatting with User ${userId}`, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    });
});
chatbotToggler2.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotToggler2 = document.querySelector(".chatbot-toggler2");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const userList = document.querySelectorAll(".user");

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    const chatContent = className === "outgoing" ?
        `<p>${message}</p>` :
        `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);

closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

chatbotToggler2.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

userList.forEach(user => {
    user.addEventListener("click", () => {
        const userId = user.getAttribute("data-user-id");
        chatbox.innerHTML = "";
        chatbox.appendChild(createChatLi(`Chatting with User ${userId}`, "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    });
});
*/
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotToggler2 = document.querySelector(".chatbot-toggler2");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; 
const API_KEY = "PASTE-YOUR-API-KEY"; 
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}
const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if(!userMessage) return;


    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotToggler2.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));