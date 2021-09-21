import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');





body {
	font-family: 'Roboto', sans-serif;
	margin: 0;
	box-sizing: border-box;
	overflow: hidden;
	font-weight: 300;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: black;
	color: #111;
}

.App {
	overflow: hidden;
	display: grid;
	grid-template-columns: 15% 85%;
	height: 100vh;

	grid-template-rows: 10vh 70vh 20vh;
	grid-template-areas:
		'aside header'
		'aside main'
		'aside footer';
}

header {
	width: 100%;
	grid-area: header;
	background-color: #111;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

aside {
	grid-area: aside;
	background-color: #111;
	
}

main {
	::-webkit-scrollbar {
	display: none;
}
	overflow: scroll;
	grid-area: main;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: #111;
}

footer {
	position: relative;
	grid-area: footer;
	background-color: #111;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: 00;
	margin: 0;
	padding: 0;
	color: #bbb;
	font-weight: 200;

}

@media only screen and (max-width: 1000px) {
	.App {
		justify-content: space-between;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 10vh auto 25vh;
		grid-template-areas:
			'header header'
			'main main'
			'footer footer';
	}

	aside {
		display: none;
	}
}


@media only screen and (max-width: 648px) {
	.App {
		grid-template-rows: auto auto 25vh;
	}

}



a {
	color: #fff;
	text-decoration: none;
}

p {
	margin: 0.5rem 0rem;
	color: #fff;
	font-size: 0.8rem;
}

li {
	list-style: none;
	margin: 0;
	padding: 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hideC::-webkit-scrollbar {
	display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hideC {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}


.yt-player-main  {
	overflow: hidden;
}


`;

export default GlobalStyle;
