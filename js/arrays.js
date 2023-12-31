const startQuestion = [
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
];

const mobileFirstQuestion = [
	{
		question: "Jaki projekt chcesz stworzyć?",
		answers: [
			{ text: "Aplikacja mobilna" },
			{ text: "Modelowanie 3D" },
			{ text: "Aplikacja VR" },
			{ text: "Web" },
			{ text: "Aplikacja AR" },
			{ text: "Jeszcze nie wiem" },
			{ text: "Gra" },
			{ text: "Inny" },
		],
	},
];

const questionsMobile = [
	{
		empty: "",
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

const questionsAR = [
	{
		empty: "",
	},
	{
		question: "Jaki rodzaj aplikacji?",
		answers: [{ text: "AR" }, { text: "WebAR" }],
	},
	{
		question: "Na jaką platformę ma być przeznaczona aplikacja?",
		answers: [{ text: "iOS" }, { text: "Android" }],
	},
	{
		question: "Na jakim etapie jest projekt?",
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

const questionsVR = [
	{
		empty: "",
	},
	{
		question: "Jaki rodzaj aplikacji?",
		answers: [
			{ text: "Szkolenie" },
			{ text: "Onboarding" },
			{ text: "Doświadczenie" },
			{ text: "Prezentacja produktu" },
			{ text: "Prezentacja usługi" },
			{ text: "Przedstawienie procesu" },
			{ text: "Gra" },
			{ text: "Inne" },
		],
	},
	{
		question: "Na jakie gogle ma być przeznaczona aplikacja?",
		answers: [{ text: "Standalone" }, { text: "PCVR" }],
	},
	{
		question: "Na jakim etapie jest projekt?",
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
		question: "Jakie są wymagania co do stylu graficznego aplikacji?",
		answers: [
			{ text: "High Poly" },
			{ text: "Low Poly" },
			{ text: "Stylizowany" },
			{ text: "Nie wiem" },
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

const questionsGame = [
	{
		empty: "",
	},
	{
		question: "Na jaką platformę ma być przeznaczona gra?",
		answers: [{ text: "VR" }, { text: "Mobile" }],
	},
	{
		question: "Na jaki system operacyjny ma być przeznaczona gra?",
		answers: [{ text: "iOS" }, { text: "Android" }],
	},
	{
		question: "Na jakie gogle ma być przeznaczona aplikacja?",
		answers: [{ text: "Standalone" }, { text: "PCVR" }],
	},
	{
		question: "Na jakim etapie jest projekt?",
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
		question: "Do kogo kierowana jest gra?",
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
		question: "Jaki jest cel gry?",
		answers: [
			{ text: "Zwiększenie sprzedaży" },
			{ text: "Zwiększenie świadomości marki" },
			{ text: "Zapewnienie rozrywki" },
			{ text: "Edukacja" },
			{ text: "Szkolenie" },
			{ text: "Rywalizacja" },
			{ text: "Inny" },
		],
	},
	{
		question: "Jakie aspekty gry są najważniejsze?",
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
		question: "W ilu językach ma być gra?",
		answers: [{ text: "Tylko jednym" }, { text: "Więcej niż jednym" }],
	},
	{
		question: "Jakie materiały do gry możemy otrzymać?",
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

const questions3D = [
	{
		empty: "",
	},
	{
		question: "Ile modeli mamy stworzyć?",
		answers: [
			{ text: "1" },
			{ text: "Od 2 do 5" },
			{ text: "Od 5 do 10" },
			{ text: "Więcej niż 10" },
		],
	},
	{
		question: "Jakie materiały do stworzenia modelu możemy otrzymać?",
		answers: [
			{ text: "Modele 3D do edycji" },
			{ text: "Szkice kocepcyjne" },
			{ text: "Zdjęcia" },
			{ text: "Wymiary" },
			{ text: "Opis" },
			{ text: "Inne" },
		],
	},
	{
		question: "Do czego ma być wykorzystywany model?",
		answers: [
			{ text: "Aplikacja mobilna" },
			{ text: "AR/WebAR" },
			{ text: "Strona internetowa" },
			{ text: "Druk 3D" },
			{ text: "Gra" },
			{ text: "Inne" },
		],
	},
	{
		question: "Czy model ma posiadać animacje?",
		answers: [{ text: "Tak" }, { text: "Nie" }],
	},
	{
		question: "Jakie aspekty modelu są najważniejsze?",
		answers: [
			{ text: "Realizm" },
			{ text: "Szczegółowość" },
			{ text: "Animacje" },
			{ text: "Inny" },
		],
	},
	{
		question: "W jakiej stylistyce mają być stworzone modele?",
		answers: [
			{ text: "High Poly" },
			{ text: "Low Poly" },
			{ text: "Jeszcze nie wiem" },
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

const questionsIdk = [
	{
		empty: "",
	},
	{
		question: "Na jakim etapie jest projekt?",
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
		question: "Jaki jest cel projektu?",
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
		question: "Do kogo kierowany jest projekt?",
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
		question: "Jakie aspekty projektu są najważniejsze?",
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

const questionsWeb = [
	{
		empty: "",
	},
	{
		question: "Jaki rodzaj strony?",
		answers: [
			{ text: "Strona firmowa" },
			{ text: "Sklep internetowy" },
			{ text: "Blog" },
			{ text: "Portfolio" },
			{ text: "CMS" },
			{ text: "Inne" },
		],
	},
	{
		question: "Jaki jest cel strony?",
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
		question: "Na jakim etapie jest projekt?",
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
		question: "Potrzebujesz domeny i hostingu?",
		answers: [{ text: "Tak" }, { text: "Nie, mam własny dostęp" }],
	},
	{
		question: "Dodatkowe funkcje strony",
		answers: [
			{ text: "Blog" },
			{ text: "Galeria" },
			{ text: "Moduł e-commerce" },
			{ text: "Inne" },
		],
	},
	{
		question: "Jakie aspekty strony są najważniejsze?",
		answers: [
			{ text: "Edukacja" },
			{ text: "Szkolenie" },
			{ text: "Zabawa" },
			{ text: "Rozrywka" },
			{ text: "Innowacyjność" },
			{ text: "Inny" },
		],
	},
	{
		question: "W ilu językach ma być gra?",
		answers: [{ text: "Tylko jednym" }, { text: "Więcej niż jednym" }],
	},
	{
		question: "Jakie materiały do strony możemy otrzymać?",
		answers: [
			{ text: "Grafiki" },
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

const encourageArr = [
	"Świetny początek! Twoja aplikacja nabiera charakteru.",
	"Twoje pomysły są cenne! To one sprawiają, że projekt będzie wyjątkowy",
	"Uwzględniając wszystkie odpowiedzi to będzie innowacyjny projekt przyciągający uwagę!",
];

const toolTipArr = [
	{
		mobile: [
			//mobile
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu aplikacji, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Otrzymane materiały pomogą nam stworzyć produkt spójny ze stylem marki i zaczerpnąć inspiracji. Usprawnią one także prace nad projektem.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		ar: [
			//ar
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu aplikacji, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Otrzymane materiały pomogą nam stworzyć produkt spójny ze stylem marki i zaczerpnąć inspiracji. Usprawnią one także prace nad projektem.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		vr: [
			//vr
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu aplikacji, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Otrzymane materiały pomogą nam stworzyć produkt spójny ze stylem marki i zaczerpnąć inspiracji. Usprawnią one także prace nad projektem.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		game: [
			//game
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu aplikacji, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Otrzymane materiały pomogą nam stworzyć produkt spójny ze stylem marki i zaczerpnąć inspiracji. Usprawnią one także prace nad projektem.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		model3d: [
			//model3d
			{
				text:
					"W przypadku większej ilości modeli, istnieje możliwość wykorzystania wspólnych lub podobnych elementów, które zostały stworzone dla wcześniejszych modeli. To pozwoli na efektywne wykorzystanie zasobów i skrócenie czasu potrzebnego na tworzenie kolejnych modeli.",
			},
			{
				text:
					"Otrzymane materiały pomogą stworzyć model zgodny z oczekiwaniami a także usprawnią  prace.",
			},
			{
				text:
					"Każdy model w zależności od zastosowania musi zostać odpowiednio przygotowany i dostosowany. Wyjaśnienie, do czego będą używane modele, pozwoli nam zaprojektować je w taki sposób, aby najlepiej służyły zamierzonym celom.",
			},
			{
				text:
					"Modele mogą zostać wzbogacone o animacje, które pokażą sposób działania, zwiększą atrakcyjność wizualną oraz wyróżnią się na tle konkurencji. Jeśli chcesz dodać animacje w modelach, prosimy o określenie co jest dla Ciebie istotne, oraz o jakie efekty czy ruchy chciałbyś, aby zostały zaimplementowane. Podanie tych informacji pomoże nam odpowiednio przygotować i zaplanować proces tworzenia modeli 3D.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		idk: [
			//idk
			{
				text:
					"Pomożemy, doradzimy w doborze rozwiązania, które idealnie sprawdzi się w danym projekcie.",
			},
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu aplikacji, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
	{
		web: [
			//web
			{
				text:
					"Zależy nam na zrozumieniu głównego celu. Poznanie go pomoże nam lepiej dostosować rozwiązania do potrzeb i oczekiwań.",
			},
			{
				text:
					"Niezależnie od głównego celu strony, może zostać wzbogacona o dodatkowe aspekty.",
			},
			{
				text:
					"Otrzymane materiały pomogą nam stworzyć produkt spójny ze stylem marki i zaczerpnąć inspiracji. Usprawnią one także prace nad projektem.",
			},
			{
				text:
					"Chcemy jak najlepiej dostosować harmonogram projektu, uwzględniając Twoje priorytety i terminy dostarczenia aplikacji. Dzięki temu będziemy mogli pracować efektywnie i dostarczyć gotowy produkt zgodnie z Twoimi oczekiwaniami.",
			},
			{
				text:
					"Informacje o dostępnym budżecie, pomogą nam dostosować nasze rozwiązania i rekomendacje do Twoich wymagań. Naszym celem jest znalezienie najbardziej efektywnego i wartościowego rozwiązania, które odpowiada Twoim potrzebom i oczekiwaniom.",
			},
		],
	},
];

export {
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
};
