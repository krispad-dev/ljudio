import { createGlobalStyle } from 'styled-components';
import useAuth from './hooks/useAuth';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
	font-family: 'Roboto', sans-serif;
	margin: 0;
	box-sizing: border-box;
	overflow: hidden;
	font-weight: 300;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: #000;
}

.App {
	display: grid;
	grid-template-columns: 20% 80%;
	grid-template-rows: 10vh auto 20vh;
	grid-template-areas:
		'header header'
		'aside main'
		'footer footer';
}

header {
	grid-area: header;
	background-color: #111;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 15px 15px 25px rgba(255, 255, 255, 1);
}

aside {
	grid-area: aside;
	background-color: black;
}

main {
	grid-area: main;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
}

footer {
	position: relative;
	grid-area: footer;
	background-color: black;
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
	font-weight: 200;
	margin: 0;
	padding: 0;
	color: #fff;
}

@media only screen and (max-width: 1000px) {
	.App {
		justify-content: space-between;
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

`;


export default GlobalStyle