var projTitles = document.getElementsByTagName("span");

for(var i = 0; i<projTitles.length; i++)
{
	projTitles.addEventListener("click", )
}

function goToPage()
{
	let theTitle = this.innerText;
	switch(true)
	{
		case theTitle === "Dumb Tic Tac Toe":
			window.location.href = "https://github.com/AliouneY/dumb-TicTacToe";
			break;
		case theTitle === "Study App":
			window.location.href = "https://github.com/AliouneY/StudyAppBetaSourceCode";
			break;
		case theTitle === "Flashcard PWA":
			window.location.href = "https://github.com/AliouneY/OOP_FlashCardPWA";
			break;
		case theTitle === "Presentation Slide Changer":
			window.location.href = "https://github.com/Alioune01/emergenhack2020_project";
			break;
		default:
			break;
	}
}