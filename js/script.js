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
	mobileFirstQuestion,
	toolTipArr,
} from "./arrays.js";

const startBtn = document.querySelector(".start-btn");

const questionsBox = document.querySelector(".questions-box");
const questionNameBox = document.querySelector(".question-name-box");
const questionName = document.querySelector(".question-name-box__h1");
const questionNameOptions = document.querySelector(
	".question-name-box__options"
);

const contactForm = document.querySelector(".contact-form");
const rules = document.querySelector(".rules");

const quizEnd = document.querySelector(".quiz-end");
const quizEndBtn = document.querySelector(".quiz-end__box-buttons--back");

const progressBarQ = document.querySelector(".progress-bar__questions-r");
const progressBar = document.querySelector(".progress-bar__questions");
const progressBarBlock = document.querySelector(".progress-bar");
const progressBarDone = document.querySelector(".progress-bar-done");
const rocket = document.querySelector(".progress-bar-done--svg");

// const callendar = document.querySelector(".calendar-box");
const toolTipBox = document.querySelector(".tooltip-box");
const closeToolTipBtn = document.querySelector(".tooltip-box__header-close");
const toolTipName = document.querySelector(".tooltip-box__header-text");
const toolTipContent = document.querySelector(".tooltip-box__body-text");

let toolTipBtn;

const loadingBox = document.querySelector(".loading-box");
const loadingBoxText = document.querySelector(".loading-box__wrapper-h1");

const buttonsBox = document.querySelector(".buttons");
const stateBtns = document.querySelectorAll(".state-btn");
const nextBtn = document.querySelector(".buttons__next");
const prevBtn = document.querySelector(".buttons__prev");
const skipBtn = document.querySelector(".buttons__skip");
const sendBtn = document.querySelector(".buttons__send");
const meetBtn = document.querySelector(".quiz-end__box-prize-meet");

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

let flagVR = false,
	flagMobile = false;

let isStart = false,
	prevClicked = false;

let tempFirstArr = [];

let remainingQuestions,
	progressWidth = 0,
	tmp = 0;

let tooltipBtns = [],
	currentQuestionName = "";

let oldIdx = 0,
	_idx = 0;

const handleStart = () => {
	questionsBox.classList.add("fade-out-anim");
	isStart = true;
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

const handleTooltip = (idx, name) => {
	const toolTip = document.createElement("span");
	const toolTipText = document.createElement("span");

	toolTipText.classList.add("tooltip__text");
	toolTip.classList.add("material-symbols-outlined", "tooltip");
	toolTip.textContent = "info";

	questionName.append(toolTip);
	toolTip.append(toolTipText);

	let text = "";

	if (mobile) {
		switch (idx) {
			case 4:
				toolTipText.textContent = toolTipArr[0].mobile[0].text;
				break;
			case 5:
				toolTipText.textContent = toolTipArr[0].mobile[1].text;
				break;
			case 7:
				toolTipText.textContent = toolTipArr[0].mobile[2].text;
				break;
			case 8:
				toolTipText.textContent = toolTipArr[0].mobile[3].text;
				break;
			case 9:
				toolTipText.textContent = toolTipArr[0].mobile[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (ar) {
		switch (idx) {
			// case 1:
			// 	const toolTipBtn1 = document.createElement("span");
			// 	const toolTipBtn2 = document.createElement("span");
			// 	const toolTipBtnText1 = document.createElement("span");
			// 	const toolTipBtnText2 = document.createElement("span");

			// 	toolTipBtnText1.classList.add("tooltip__text");
			// 	toolTipBtnText2.classList.add("tooltip__text");
			// 	toolTipBtn1.classList.add("material-symbols-outlined", "tooltip");
			// 	toolTipBtn2.classList.add("material-symbols-outlined", "tooltip");

			// 	toolTipBtn1.textContent = "info";
			// 	toolTipBtn2.textContent = "info";

			// 	toolTipBtn1.append(toolTipBtnText1);
			// 	toolTipBtn2.append(toolTipBtnText2);

			// 	tooltipBtns[0].append(toolTipBtn1);
			// 	toolTipBtnText1.textContent =
			// 		"Stworzenie dedykowanej aplikacji dla produktów lub usługi zawieraja więcej elementów takich jak na przykład:";

			// 	tooltipBtns[1].append(toolTipBtn2);
			// 	toolTipBtnText2.textContent =
			// 		"Stworzona na konkretne wydarzenia, święta czy okoliczności. Głównie charakteryzuje się:";

			// 	toolTip.style.display = "none";
			// 	break;
			case 5:
				toolTipText.textContent = toolTipArr[1].ar[0].text;
				break;
			case 6:
				toolTipText.textContent = toolTipArr[1].ar[1].text;
				break;
			case 8:
				toolTipText.textContent = toolTipArr[1].ar[2].text;
				break;
			case 9:
				toolTipText.textContent = toolTipArr[1].ar[3].text;
				break;
			case 10:
				toolTipText.textContent = toolTipArr[1].ar[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (vr) {
		switch (idx) {
			case 5:
				toolTipText.textContent = toolTipArr[2].vr[0].text;
				break;
			case 6:
				toolTipText.textContent = toolTipArr[2].vr[1].text;
				break;
			case 8:
				toolTipText.textContent = toolTipArr[2].vr[2].text;
				break;
			case 10:
				toolTipText.textContent = toolTipArr[2].vr[3].text;
				break;
			case 11:
				toolTipText.textContent = toolTipArr[2].vr[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (game) {
		switch (idx) {
			case 6:
				toolTipText.textContent = toolTipArr[3].game[0].text;
				break;
			case 7:
				toolTipText.textContent = toolTipArr[3].game[1].text;
				break;
			case 9:
				toolTipText.textContent = toolTipArr[3].game[2].text;
				break;
			case 10:
				toolTipText.textContent = toolTipArr[3].game[3].text;
				break;
			case 11:
				toolTipText.textContent = toolTipArr[3].game[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (model3D) {
		switch (idx) {
			case 1:
				toolTipText.textContent = toolTipArr[4].model3d[0].text;
				break;
			case 2:
				toolTipText.textContent = toolTipArr[4].model3d[1].text;
				break;
			case 3:
				toolTipText.textContent = toolTipArr[4].model3d[2].text;
				break;
			case 4:
				toolTipText.textContent = toolTipArr[4].model3d[3].text;
				break;
			case 7:
				toolTipText.textContent = toolTipArr[4].model3d[4].text;
				break;
			case 8:
				toolTipText.textContent = toolTipArr[4].model3d[5].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (idk) {
		switch (idx) {
			case 1:
				toolTipText.textContent = toolTipArr[5].idk[0].text;
				break;
			case 2:
				toolTipText.textContent = toolTipArr[5].idk[1].text;
				break;
			case 4:
				toolTipText.textContent = toolTipArr[5].idk[2].text;
				break;
			case 5:
				toolTipText.textContent = toolTipArr[5].idk[3].text;
				break;
			case 6:
				toolTipText.textContent = toolTipArr[5].idk[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	} else if (web) {
		switch (idx) {
			case 2:
				toolTipText.textContent = toolTipArr[6].web[0].text;
				break;
			case 6:
				toolTipText.textContent = toolTipArr[6].web[1].text;
				break;
			case 8:
				toolTipText.textContent = toolTipArr[6].web[2].text;
				break;
			case 9:
				toolTipText.textContent = toolTipArr[6].web[3].text;
				break;
			case 10:
				toolTipText.textContent = toolTipArr[6].web[4].text;
				break;
			default:
				toolTip.style.display = "none";
		}
	}

	text = toolTipText.textContent;

	toolTipName.textContent = name;
	toolTipContent.textContent = text;

	toolTipBtn = document.querySelector(".tooltip");

	toolTipBtn.addEventListener("click", () => {
		toolTipBox.classList.add("tooltip-active");
	});
};

const createMobile = (idx) => {
	questionName.textContent = questionsMobile[idx].question;
	currentQuestionName = questionsMobile[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

	for (let i = 0; i < questionsMobile[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");
		// const checkMark = document.createElement("i");

		// questionBtn.innerHTML = `<i class="fa-solid fa-check" style="position: relative; left: 25px; margin-right: auto;"></i> <span>${questionsMobile[idx].answers[i].text}</span>`;

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsMobile[idx].answers[i].text;

		// questionBtn.append(toolTip);

		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}

		if (questionBtn.textContent === "Android") {
			const iconSpan = document.createElement("span");
			iconSpan.classList.add("material-symbols-outlined");
			iconSpan.textContent = "android";
			questionBtn.append(iconSpan);
		}
		// else if(questionBtn.textContent === "iOS") {
		// 	const iconSpan = document.createElement("span");
		// 	iconSpan.classList.add("material-symbols-outlined");
		// 	iconSpan.textContent = "apple";
		// 	questionBtn.append(iconSpan);
		// }

		// questionBtn.setAttribute("data-number", i);

		// questionBtn.append(checkMark);
		// checkMark.classList.add("fa-solid", "fa-check");
	}
};

const createVR = (idx) => {
	questionName.textContent = questionsVR[idx].question;
	currentQuestionName = questionsVR[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

	for (let i = 0; i < questionsVR[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");
		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsVR[idx].answers[i].text;
		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}
};

const createAR = (idx) => {
	questionName.textContent = questionsAR[idx].question;
	currentQuestionName = questionsAR[idx].question;
	questionNameBox.style.display = "block";

	tooltipBtns = [];

	for (let i = 0; i < questionsAR[idx].answers.length; i++) {
		const questionBtn = document.createElement("button");

		questionBtn.classList.add("answer-btn", "hover");
		questionBtn.textContent = questionsAR[idx].answers[i].text;

		if (idx === 1) {
			tooltipBtns.push(questionBtn);

			console.log(tooltipBtns);
		}

		if (i % 2 === 0) {
			leftSection.append(questionBtn);
		} else {
			rightSection.append(questionBtn);
		}
	}

	handleTooltip(idx, currentQuestionName);
};

const createGame = (idx) => {
	questionName.textContent = questionsGame[idx].question;
	currentQuestionName = questionsGame[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

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
	currentQuestionName = questions3D[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

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
	currentQuestionName = questionsWeb[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

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
	currentQuestionName = questionsIdk[idx].question;
	questionNameBox.style.display = "block";

	handleTooltip(idx, currentQuestionName);

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
	if (mobile) {
		if (currentQuestionIndex >= 1 && currentQuestionIndex <= 4) {
			// multiple options
			questionNameOptions.style.display = "block";
		} else {
			// one option
			questionNameOptions.style.display = "none";
		}
	} else if (ar) {
		if (
			(currentQuestionIndex >= 2 && currentQuestionIndex <= 6) ||
			currentQuestionIndex === 8
		) {
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	} else if (vr) {
		if (
			currentQuestionIndex === 1 ||
			(currentQuestionIndex >= 3 && currentQuestionIndex <= 6) ||
			currentQuestionIndex === 8
		) {
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	} else if (game) {
		if (
			currentQuestionIndex === 2 ||
			(currentQuestionIndex >= 4 && currentQuestionIndex <= 7) ||
			currentQuestionIndex === 8
		) {
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	} else if (model3D) {
		if (
			(currentQuestionIndex >= 2 && currentQuestionIndex <= 3) ||
			currentQuestionIndex === 5
		) {
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	} else if (idk) {
		if (currentQuestionIndex >= 1 && currentQuestionIndex <= 4) {
			console.log("DSAdas");
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	} else if (web) {
		if (
			(currentQuestionIndex >= 2 && currentQuestionIndex <= 3) ||
			(currentQuestionIndex >= 5 && currentQuestionIndex <= 6) ||
			currentQuestionIndex === 8
		) {
			questionNameOptions.style.display = "block";
		} else {
			questionNameOptions.style.display = "none";
		}
	}
};

const checkAnswer = () => {
	if (flagVR) {
		currentQuestionIndex = 2;
		remainingQuestions = 12;
	} else if (flagMobile) {
		userAnswerGame = true;
	}

	if (userAnswerGame && currentQuestionIndex === 2) {
		console.log("mobile");
		userAnswerGame = false;
		currentQuestionIndex = 3;
		remainingQuestions = 11;
	}
};

const nextQuestion = () => {
	prevClicked = false;
	checkAnswer();

	if (currentQuestionIndex < qeustionLength - 1) {
		currentQuestionIndex++;
		showQuestion(currentQuestionIndex);
	} else {
		// currentQuestionIndex = qeustionLength + 1;
		showTextInput();
		// questionsBox.style.flexDirection = "column";
		// questionsBox.style.justifyContent = "space-between";
	}
};

const handleProgressBar = () => {
	progressBarBlock.style.display = "block";

	tmp = 100 / (qeustionLength + 1);

	if (!prevClicked) {
		remainingQuestions--;
		progressBarQ.textContent = remainingQuestions;

		progressWidth += tmp;
	} else {
		remainingQuestions++;
		progressBarQ.textContent = remainingQuestions;
		prevClicked = false;

		progressWidth -= tmp;
	}

	progressWidth = Math.round((progressWidth + Number.EPSILON) * 100) / 100;

	if (remainingQuestions === 0) {
		progressWidth = 100;
	}

	progressBarDone.style.width = `${progressWidth}%`;

	// let progressBarWidth;

	// setTimeout(() => {
	// 	progressBarWidth = document.querySelector(".progress-bar-done").clientWidth;
	// }, 300);

	// console.log(progressBarWidth + "width");
	// rocket.style.left = `${progressBarWidth - 42.5}px`;
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

	if (window.innerWidth <= 744) {
		questionsBox.style.flexDirection = "column";
		if (textAreaActive) {
			questionsBox.style.display = "block";
		}
	} else {
		questionsBox.style.flexDirection = "row";
	}
	questionsBox.style.justifyContent = "center";

	// only on start
	if (currentQuestionIndex === 0) {
		progressBarBlock.style.display = "none";
		questionName.textContent = tempFirstArr[0].question;
		questionNameBox.style.display = "block";
		for (let i = 0; i < tempFirstArr[0].answers.length; i++) {
			const questionBtn = document.createElement("button");
			// const checkMark = document.createElement("i");

			// questionBtn.innerHTML = `<i class="fa-solid fa-check" style="position: relative; left: 25px; margin-right: auto;"></i> <span>${questionsMobile[idx].answers[i].text}</span>`;

			questionBtn.classList.add("answer-btn", "hover");
			questionBtn.textContent = tempFirstArr[0].answers[i].text;
			if (i % 2 === 0) {
				leftSection.append(questionBtn);
			} else {
				rightSection.append(questionBtn);
			}
		}

		progressWidth = 0;
	}

	if (currentQuestionIndex !== 0) {
		if (mobile) {
			// qeustionLength = questionsMobile.length;
			createMobile(idx);
		} else if (vr) {
			// qeustionLength = questionsVR.length;
			createVR(idx);
		} else if (ar) {
			// qeustionLength = questionsAR.length;
			createAR(idx);
		} else if (game) {
			// qeustionLength = questionsGame.length;
			createGame(idx);
		} else if (model3D) {
			// qeustionLength = questions3D.length;
			createModel3D(idx);
		} else if (web) {
			// qeustionLength = questionsWeb.length;
			createWeb(idx);
		} else if (idk) {
			// qeustionLength = questionsIdk.length;
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

	if (questionNameOptions.style.display === "block") {
		nextBtn.style.display = "block";
	} else {
		nextBtn.style.display = "none";
	}

	answerBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (currentQuestionIndex === 0) {
				(mobile = false),
					(vr = false),
					(ar = false),
					(game = false),
					(model3D = false),
					(web = false),
					(idk = false),
					(qeustionLength = 0);

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
						idk = true;
						break;
				}

				remainingQuestions = qeustionLength + 1;
			}

			// console.log(answerArr[btn.getAttribute("data-number")].textContent);
			// console.log(btn.getAttribute("data-number"));

			// multiple options
			if (questionNameOptions.style.display === "block") {
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
				userAnswers.push(`${currentQuestionIndex} ${btn.textContent}`);

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

				flagVR = false;
				flagMobile = false;

				if (btn.textContent === "VR") {
					flagVR = true;
				} else if (btn.textContent === "Mobile") {
					flagMobile = true;
				}

				nextQuestion();
			}
		});

		if (userAnswers.includes(`${currentQuestionIndex} ${btn.textContent}`)) {
			btn.classList.add("active-btn");
			btn.classList.remove("hover");
		}
	});

	if (currentQuestionIndex === 0) return;

	handleProgressBar();

	if (idx % 3 != 0) {
		return;
	}

	// idx = Math.floor(Math.random() * 3);

	while (_idx === oldIdx) {
		_idx = Math.floor(Math.random() * 3);
	}

	oldIdx = _idx;

	// if (_idx === oldIdx) {
	// 	oldIdx = idx;
	// }

	loadingBoxText.textContent = encourageArr[_idx];

	loadingBox.classList.remove("slide-out-anim");
	loadingBox.classList.add("slide-in-anim");

	setTimeout(() => {
		loadingBox.classList.remove("slide-in-anim");
		loadingBox.classList.add("slide-out-anim");
	}, 2000);
};

const showTextInput = () => {
	handleProgressBar();

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
	questionsBox.style.justifyContent = "center";

	if (window.innerWidth <= 744) {
		questionsBox.style.display = "block";
	} else {
		questionsBox.style.display = "flex";
	}
};

const showForm = () => {
	handleProgressBar();

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

const handleEnd = () => {
	window.location.replace("https://vhsoft.io/");
};

const showEndScreen = () => {
	progressBar.style.display = "none";
	quizEnd.style.display = "flex";
};

const closeTooltip = () => {
	toolTipBox.classList.add("tooltip-close");
	toolTipBox.classList.remove("tooltip-active");

	toolTipBox.addEventListener("animationend", () => {
		toolTipBox.classList.remove("tooltip-close");
	});
};

window.onload = () => {
	if (window.innerWidth >= 375 && window.innerWidth <= 744) {
		tempFirstArr = mobileFirstQuestion;
	} else {
		tempFirstArr = startQuestion;
	}
};

window.addEventListener("resize", () => {
	if (!isStart) {
		return;
	}

	if (window.innerWidth <= 744) {
		questionsBox.style.flexDirection = "column";
		tempFirstArr = mobileFirstQuestion;
		if (textAreaActive) {
			questionsBox.style.display = "block";
		}
	} else {
		toolTipBox.classList.remove("tooltip-active");
		tempFirstArr = startQuestion;
		questionsBox.style.flexDirection = "row";
		questionsBox.style.display = "flex";
	}
});

startBtn.addEventListener("click", handleStart);

questionsBox.addEventListener("animationend", () => {
	showQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", () => {
	answerBtns.forEach((btn) => {
		if (btn.classList.contains("active-btn")) {
			userAnswers.push(`${currentQuestionIndex} ${btn.textContent}`);
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
	nextQuestion();
});

prevBtn.addEventListener("click", () => {
	if (currentQuestionIndex > 0) {
		prevClicked = true;
	} else {
		prevClicked = false;
	}

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
quizEndBtn.addEventListener("click", handleEnd);
sendBtn.addEventListener("click", showEndScreen);
closeToolTipBtn.addEventListener("click", closeTooltip);

// meetBtn.addEventListener("click", () => {
// 	buttonsBox.style.display = "none";
// 	quizEnd.style.display = "none";
// 	callendar.style.display = "block";
// });
