import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


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
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
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

h2 {
	font-size: 1rem;
	font-weight: 400;
}

h3 {
	font-size: 0.8rem;
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



a, a:hover, a:focus, a:active {
	text-decoration: none;
     color: inherit;

}

p {
	margin: 0.5rem 0rem;
	color: #ddd;
	font-size: 0.8rem;
	font-family: 'Open Sans', sans-serif;
	font-weight: 200;
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


.yt-player-main  {
	overflow: hidden;
}


`;

export default GlobalStyle;
