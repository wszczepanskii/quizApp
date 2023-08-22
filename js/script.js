import { questionsMobile, encourageArr } from "./arrays.js";

const startBtn = document.querySelector(".start-btn");
const main = document.querySelector(".main");
const questionsBox = document.querySelector(".questions-box");
const questionNameBox = document.querySelector(".question-name-box");
const questionName = document.querySelector(".question-name-box__h1");
const questionNameOptions = document.querySelector(
	".question-name-box__options"
);
const contactForm = document.querySelector(".contact-form");
const rules = document.querySelector(".rules");

const stateBtns = document.querySelectorAll(".state-btn");
const nextBtn = document.querySelector(".buttons__next");
const prevBtn = document.querySelector(".buttons__prev");
const skipBtn = document.querySelector(".buttons__skip");
const sendBtn = document.querySelector(".buttons__send");

let answerBtns, answerArr;

const leftSection = document.createElement("div");
const rightSection = document.createElement("div");
const textArea = document.createElement("textarea");

let currentQuestionIndex = 0;
let userAnswers = [];
let textAreaActive = false;
let isAnswer = false;
let infoFromUser;

const handleStart = () => {
	questionsBox.classList.add("fade-out-anim");
};

const removeContent = () => {
	// while (questionsBox.firstChild) {
	// 	questionsBox.removeChild(questionsBox.lastChild);
	// }

	[...questionsBox.children].forEach(
		(child) => {
			if (child !== contactForm && child !== rules) {
				questionsBox.removeChild(child);
			}
		}
		// child !== contactForm ? questionsBox.removeChild(child) : null
	);

	if (leftSection !== undefined && rightSection !== undefined) {
		while (leftSection.firstChild && rightSection.firstChild) {
			leftSection.removeChild(leftSection.lastChild);
			rightSection.removeChild(rightSection.lastChild);
		}
	}

	textArea.remove();
};

const showHelp = () => {
	if (currentQuestionIndex >= 1 && currentQuestionIndex <= 4) {
		// multiple options
		questionNameOptions.style.display = "block";
	} else {
		// one option
		questionNameOptions.style.display = "none";
	}
};

const showQuestion = (idx) => {
	removeContent();

	stateBtns.forEach((btn) => {
		btn.style.display = "block";
	});

	textAreaActive = false;
	isAnswer = false;

	skipBtn.style.display = "none";
	sendBtn.style.display = "none";

	leftSection.classList.add("section", "section-left");
	rightSection.classList.add("section", "section-right");

	questionsBox.append(leftSection, rightSection);
	questionsBox.style.display = "flex";
	questionsBox.style.flexDirection = "row";
	questionsBox.style.justifyContent = "center";

	questionName.textContent = questionsMobile[idx].question;
	questionNameBox.style.display = "block";

	for (let i = 0; i < questionsMobile[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");
		// const checkMark = document.createElement("i");

		questionBtn.classList.add("answer-btn", "hover");
		// questionBtn.append(checkMark);
		questionBtn.textContent = questionsMobile[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
			questionBtn.classList.add("left-btn");
		} else {
			rightSection.append(questionBtn);
			questionBtn.classList.add("right-btn");
		}

		// checkMark.classList.add("fa-solid");
		// checkMark.classList.add("fa-check");
	}

	answerBtns = document.querySelectorAll(".answer-btn");

	questionsBox.classList.remove("fade-out-anim");

	showHelp();

	answerArr = [...answerBtns];
	let active = false;
	console.log(currentQuestionIndex);
	answerBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// multiple options
			if (currentQuestionIndex >= 1 && currentQuestionIndex <= 4) {
				if (btn.classList.contains("active-btn")) {
					btn.classList.remove("active-btn");
					btn.classList.add("hover");
				} else {
					btn.classList.add("active-btn");
					btn.classList.remove("hover");
				}
			} else {
				// one option
				for (let i = 0; i < answerArr.length; i++) {
					if (answerArr[i].classList.contains("active-btn")) {
						active = true;
					}
				}

				if (!active) {
					btn.setAttribute("aria-checked", "true");
					btn.classList.remove("hover");
					btn.classList.add("active-btn");
				} else {
					btn.setAttribute("aria-checked", "false");
					btn.classList.remove("active-btn");
					btn.classList.add("hover");
					active = false;
				}
			}
		});

		if (userAnswers.includes(`${currentQuestionIndex} ${btn.textContent}`)) {
			btn.classList.add("active-btn");
			btn.classList.remove("hover");
		}
	});

	// setTimeout(() => {
	// 	questionsBox.classList.add("fade-in-anim");
	// }, 0.8);
};

const showTextInput = () => {
	removeContent();
	currentQuestionIndex = 11;
	skipBtn.style.display = "block";
	nextBtn.style.display = "none";
	sendBtn.style.display = "none";

	textAreaActive = true;

	questionName.textContent =
		"Czy są jakieś dodatkowe informacje, które chcesz nam przekazać?";

	questionsBox.append(textArea);
	textArea.setAttribute("maxlength", 250);
	textArea.setAttribute("placeholder", "Aplikacja ma być...");
	textArea.classList.add("text-area");
};

const showForm = () => {
	removeContent();
	currentQuestionIndex = 12;
	sendBtn.style.display = "block";
	skipBtn.style.display = "none";
	questionName.textContent = "Twoje dane kontaktowe";

	questionsBox.style.display = "block";

	contactForm.classList.add("contact-form-active");
	rules.classList.add("rules-active");

	infoFromUser = textArea.value;
};

startBtn.addEventListener("click", handleStart);

questionsBox.addEventListener("animationend", () => {
	showQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", () => {
	answerBtns.forEach((btn) => {
		if (btn.classList.contains("active-btn")) {
			userAnswers.push(`${currentQuestionIndex} ` + btn.textContent);
		}
	});

	console.log(userAnswers);

	for (let i = 0; i < answerBtns.length; i++) {
		if (answerBtns[i].classList.contains("active-btn")) {
			isAnswer = true;
			break;
		} else {
			isAnswer = false;
		}
	}

	if (isAnswer) {
		if (currentQuestionIndex < 10) {
			currentQuestionIndex++;
			showQuestion(currentQuestionIndex);
		} else {
			currentQuestionIndex = 11;
			showTextInput();
			questionsBox.style.flexDirection = "column";
			questionsBox.style.justifyContent = "space-between";
		}
	} else {
		alert("Proszę wybrać odpowiedź");
	}
});

prevBtn.addEventListener("click", () => {
	contactForm.classList.remove("contact-form-active");
	rules.classList.remove("rules-active");

	if (currentQuestionIndex > 0 && currentQuestionIndex <= 11) {
		currentQuestionIndex--;
		showQuestion(currentQuestionIndex);
	} else if (currentQuestionIndex > 0) {
		showTextInput();
	}

	console.log(userAnswers);

	for (let i = 0; i < userAnswers.length; i++) {
		if (userAnswers[i].includes(`${currentQuestionIndex} `)) {
			userAnswers.splice(i);
		}
	}
});

skipBtn.addEventListener("click", showForm);
