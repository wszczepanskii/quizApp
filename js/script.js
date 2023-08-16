const questionsMobile = [
	{
		question: "Jaki projekt chcesz stworzyć?",
		answers: [
			{ text: "Aplikacja mobilna" },
			{ text: "Aplikacja VR" },
			{ text: "Aplikacja AR" },
			{ text: "Gra" },
			{ text: "Modelowanie 3D" },
			{ text: "Web" },
			{ text: "Jeszcze nie wiem" },
			{ text: "Inny" },
		],
	},
	{
		question: "Na jaką platformę ma być przeznaczona aplikacja?",
		answers: [{ text: "iOS" }, { text: "Android" }],
	},
	{
		question: "Na jakim etapie jesteś?",
		answers: [
			{ text: "Robię research rynku" },
			{ text: "Chce wybrać wykonawcę" },
			{ text: "Mam wstępną koncepcję" },
			{ text: "Mam całą kocepcję" },
			{ text: "Nie mam jeszcze pomysłu" },
			{ text: "Innym" },
		],
	},
	{
		question: "Do kogo kierowana jest aplikacja?",
		answers: [
			{ text: "Do klientów indywidualnych (B2C)" },
			{ text: "Do klientów biznesowych (B2B)" },
			{ text: "Do sektora edukacji" },
			{ text: "Do pracowników firmy" },
			{ text: "B+R" },
			{ text: "Do innej grupy" },
		],
	},
	{
		question: "Jaki jest cel aplikacji?",
		answers: [
			{ text: "Zwiększenie sprzedaży" },
			{ text: "Zwiększenie świadomości marki" },
			{ text: "Zapewnienie rozrywki" },
			{ text: "Edukacja" },
			{ text: "Szkolenie" },
			{ text: "Inny" },
		],
	},
	{
		question: "Jakie aspekty aplikacji są najważniejsze?",
		answers: [
			{ text: "Edukacja" },
			{ text: "Szkolenie" },
			{ text: "Zabawa" },
			{ text: "Rozrywka" },
			{ text: "Realizm" },
			{ text: "Innowacyjność" },
			{ text: "Wieloplatformowość" },
			{ text: "Inny" },
		],
	},
	{
		question: "W ilu językach ma być aplikacja?",
		answers: [{ text: "Tylko jednym" }, { text: "Więcej niż jednym" }],
	},
	{
		question: "Jakie materiały do aplikacji możemy otrzymać?",
		answers: [
			{ text: "Modele 3D" },
			{ text: "Projekty ekranów" },
			{ text: "Scenariusz" },
			{ text: "Key Visual" },
			{ text: "Księgę znaku" },
			{ text: "Inne" },
		],
	},
	{
		question: "Jaki jest czas na wykonanie aplikacji?",
		answers: [
			{ text: "Mniej niż miesiąc" },
			{ text: "1 - 2 miesiące" },
			{ text: "2 - 6 miesięce" },
			{ text: "6 - 12 miesięcy" },
			{ text: "Więcej niż 12 miesięcy" },
			{ text: "Nie mamy konkretnego terminu" },
		],
	},
	{
		question: "Jaki jest przeznaczony budżet?",
		answers: [
			{ text: "Do 10 tyś." },
			{ text: "Od 10 do 25 tyś." },
			{ text: "Od 25 do 50 tyś." },
			{ text: "Od 50 do 100 tyś." },
			{ text: "Więcej niż 100 tyś." },
			{ text: "Jeszcze nie wiemy" },
		],
	},
	{
		question: "Kiedy zaczynamy działać?",
		answers: [
			{ text: "W ciągu miesiąca" },
			{ text: "Za 1 - 2 miesiące" },
			{ text: "Za 2 - 4 miesiące" },
			{ text: "Za 6 - 12 miesięcy" },
			{ text: "W przyszłym roku" },
			{ text: "Nie mamy konkretnego terminu" },
		],
	},
];

const startBtn = document.querySelector(".start-btn");
const main = document.querySelector(".main");
const questionsBox = document.querySelector(".questions-box");
const questionNameBox = document.querySelector(".question-name-box");
const questionName = document.querySelector(".question-name-box__h1");
const questionNameOptions = document.querySelector(
	".question-name-box__options"
);
const contactForm = document.querySelector(".contact-form");

const stateBtns = document.querySelectorAll(".state-btn");
const nextBtn = document.querySelector(".buttons__next");
const prevBtn = document.querySelector(".buttons__prev");
const skipBtn = document.querySelector(".buttons__skip");
const sendBtn = document.querySelector(".buttons__send");

let answerBtns, answerArr;

const leftSection = document.createElement("div");
const rightSection = document.createElement("div");
const textArea = document.createElement("textarea");

let currentQuestionIndex = 10;
let userAnswers = [];
let textAreaActive = false;
let isAnswer = false;
let infoFromUser;

const handleStart = () => {
	questionsBox.classList.add("fade-out-anim");
};

const removeContent = () => {
	while (questionsBox.firstChild) {
		questionsBox.removeChild(questionsBox.lastChild);
	}

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
