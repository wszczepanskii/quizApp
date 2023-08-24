import {
	questionsMobile,
	encourageArr,
	questions3D,
	questionsAR,
	questionsGame,
	questionsIdk,
	questionsVR,
	questionsWeb,
	startQuestion,
} from "./arrays.js";

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
let isAnswer = false,
	userAnswerGame = false;
let infoFromUser;

let qeustionLength;

let mobile = false,
	vr = false,
	ar = false,
	game = false,
	model3D = false,
	web = false,
	idk = false,
	other = false;

const handleStart = () => {
	questionsBox.classList.add("fade-out-anim");
};

const removeContent = () => {
	[...questionsBox.children].forEach((child) => {
		if (child !== contactForm && child !== rules) {
			questionsBox.removeChild(child);
		}
	});

	[...leftSection.children].forEach((child) => {
		leftSection.removeChild(child);
	});

	[...rightSection.children].forEach((child) => {
		rightSection.removeChild(child);
	});

	textArea.remove();
};

const createMobile = (idx) => {
	questionName.textContent = questionsMobile[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsMobile[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");
		// const checkMark = document.createElement("i");

		// questionBtn.innerHTML = `<i class="fa-solid fa-check" style="position: relative; left: 25px; margin-right: auto;"></i> <span>${questionsMobile[idx].answers[i].text}</span>`;

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsMobile[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}

		// questionBtn.setAttribute("data-number", i);

		// questionBtn.append(checkMark);
		// checkMark.classList.add("fa-solid", "fa-check");
	}
};

const createVR = (idx) => {
	questionName.textContent = questionsVR[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsVR[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");
		// const checkMark = document.createElement("i");

		// questionBtn.innerHTML = `<i class="fa-solid fa-check" style="position: relative; left: 25px; margin-right: auto;"></i> <span>${questionsMobile[idx].answers[i].text}</span>`;

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsVR[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}

		// questionBtn.setAttribute("data-number", i);

		// questionBtn.append(checkMark);
		// checkMark.classList.add("fa-solid", "fa-check");
	}
};

const createAR = (idx) => {
	questionName.textContent = questionsAR[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsAR[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsAR[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
};

const createGame = (idx) => {
	questionName.textContent = questionsGame[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsGame[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsGame[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
};

const createModel3D = (idx) => {
	questionName.textContent = questions3D[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questions3D[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questions3D[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
};

const createWeb = (idx) => {
	questionName.textContent = questionsWeb[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsWeb[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsWeb[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
};

const createIdk = (idx) => {
	questionName.textContent = questionsIdk[idx].question;
	questionNameBox.style.display = "block";
	for (let i = 0; i < questionsIdk[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsIdk[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
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

	// only on start
	if (currentQuestionIndex === 0) {
		questionName.textContent = startQuestion[0].question;
		questionNameBox.style.display = "block";
		for (let i = 0; i < startQuestion[0].answers.length; i++) {
			const questionBtn = document.createElement("button");
			// const checkMark = document.createElement("i");

			// questionBtn.innerHTML = `<i class="fa-solid fa-check" style="position: relative; left: 25px; margin-right: auto;"></i> <span>${questionsMobile[idx].answers[i].text}</span>`;

			questionBtn.classList.add("answer-btn", "hover");
			questionBtn.textContent = startQuestion[0].answers[i].text;
			if (i % 2 === 0) {
				leftSection.append(questionBtn);
			} else {
				rightSection.append(questionBtn);
			}
		}
	}

	if (currentQuestionIndex !== 0) {
		if (mobile) {
			qeustionLength = questionsMobile.length;
			createMobile(idx);
		} else if (vr) {
			qeustionLength = questionsVR.length;
			createVR(idx);
		} else if (ar) {
			qeustionLength = questionsAR.length;
			createAR(idx);
		} else if (game) {
			qeustionLength = questionsGame.length;
			createGame(idx);
		} else if (model3D) {
			qeustionLength = questions3D.length;
			createModel3D(idx);
		} else if (web) {
			qeustionLength = questionsWeb.length;
			createWeb(idx);
		} else if (idk) {
			qeustionLength = questionsIdk.length;
			createIdk(idx);
		} else if (other) {
			qeustionLength = questionsIdk.length;
			createIdk(idx);
		}
	}

	answerBtns = document.querySelectorAll(".answer-btn");

	questionsBox.classList.remove("fade-out-anim");

	showHelp();

	answerArr = [...answerBtns];
	// console.log(answerArr);
	let active = false;
	console.log(currentQuestionIndex);
	answerBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(answerArr[btn.getAttribute("data-number")].textContent);
			// console.log(btn.getAttribute("data-number"));
			// multiple options
			if (currentQuestionIndex >= 1 && currentQuestionIndex <= 4) {
				if (btn.classList.contains("active-btn")) {
					btn.classList.remove("active-btn");
					btn.classList.add("hover");

					// btn.innerHTML = `<i class="fa-solid fa-check"></i> ${e.target.textContent}`;
				} else {
					btn.classList.add("active-btn");
					btn.classList.remove("hover");
					// btn.innerHTML = `${e.target.textContent}`;
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

			if (currentQuestionIndex === 0 && btn.classList.contains("active-btn")) {
				(mobile = false),
					(vr = false),
					(ar = false),
					(game = false),
					(model3D = false),
					(web = false),
					(idk = false),
					(other = false);

				qeustionLength = 0;

				const expr = btn.textContent;

				switch (expr) {
					case "Aplikacja mobilna":
						qeustionLength = questionsMobile.length;
						mobile = true;
						break;
					case "Aplikacja VR":
						qeustionLength = questionsVR.length;
						vr = true;
						break;
					case "Aplikacja AR":
						qeustionLength = questionsAR.length;
						ar = true;
						break;
					case "Gra":
						qeustionLength = questionsGame.length;
						game = true;
						break;
					case "Modelowanie 3D":
						qeustionLength = questions3D.length;
						model3D = true;
						break;
					case "Web":
						qeustionLength = questionsWeb.length;
						web = true;
						break;
					case "Jeszcze nie wiem":
						qeustionLength = questionsIdk.length;
						idk = true;
						break;
					case "Inny":
						qeustionLength = questionsIdk.length;
						other = true;
						break;
				}

				// console.log(mobile, vr, ar, game, model3D, web, idk, other);
			}

			// if (btn.textContent === "Aplikacja mobilna") {
			// 	mobile = true;
			// }
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
	currentQuestionIndex = qeustionLength;
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
	currentQuestionIndex = qeustionLength + 1;
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
			userAnswers.push(`${currentQuestionIndex} ${btn.textContent}`);
		}

		if (btn.classList.contains("active-btn") && btn.textContent === "VR") {
			// console.log("Dasdas");
			currentQuestionIndex = 2;
		} else if (
			btn.classList.contains("active-btn") &&
			btn.textContent === "Mobile"
		) {
			userAnswerGame = true;
			// currentQuestionIndex = 3;
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

	if (!isAnswer) {
		alert("Proszę wybrać odpowiedź");
		return;
	}

	if (userAnswerGame && currentQuestionIndex === 2) {
		console.log("kdjsakjdas");
		userAnswerGame = false;
		// flag = false;
		currentQuestionIndex = 3;
	}

	if (currentQuestionIndex < qeustionLength - 1) {
		currentQuestionIndex++;
		showQuestion(currentQuestionIndex);
	} else {
		// currentQuestionIndex = qeustionLength + 1;
		showTextInput();
		questionsBox.style.flexDirection = "column";
		questionsBox.style.justifyContent = "space-between";
	}
});

prevBtn.addEventListener("click", () => {
	contactForm.classList.remove("contact-form-active");
	rules.classList.remove("rules-active");

	if (currentQuestionIndex > 0 && currentQuestionIndex <= qeustionLength) {
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
