import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	:root {
		--color-primary: #FD377E;
		--color-primary-2: #E34981;
		--color-primary-3: #e34981c0;
		--color-secondary: #03B898;
		--grey-1: #F8F9FA;
		--grey-2: #E9ECEF;
		--grey-3: #868E96;
		--grey-4: #212529;
		--grey-5: #2125292d;

		font-size: 62.5%;

		--font-primary: 'Nunito Sans', sans-serif;
		--font-secondary: 'Inter';

		--size-1: 3.8rem;
		--size-2: 2.2rem;
		--size-3: 1.6rem;
		--size-4: 1.2rem;

		--weight-1: 800;
		--weight-2: 700;
		--weight-3: 600;
		--weight-4: 400;
	}

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	#root{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	body, html {
		width: 100vw;
		height: 100vh;
		background: var(--color-background);
		overflow-x: hidden;
	}

	body, input, button, textarea{
		font-family: 'Inter', sans-serif;
	}

	button, select{
		cursor: pointer;
	}

	.hidden{
		display: none;
	}

	ul {
		list-style: none;
	}
`