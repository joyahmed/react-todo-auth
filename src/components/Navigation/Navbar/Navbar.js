import React from 'react';
import styled from 'styled-components';

import Logo from '../../Logo/Logo';
import { Container } from '../../../hoc/layout/elements/Container';
import NavItems from '../NavItems/NavItems';

const FixedWrapper = styled.div`
	position: fixed;
	background-color: var(--color-main);
	padding: 0rem 2rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;

	@media ${props => props.theme.mediaQueries.smallest} {
		display: none;
	}
`;

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-around;
`;

const Navbar = (mobile, clicked) => {
	return (
		<FixedWrapper>
			<Container>
				<Wrapper>
					<Logo />
					<NavItems />
				</Wrapper>
			</Container>
		</FixedWrapper>
	);
};

export default Navbar;
