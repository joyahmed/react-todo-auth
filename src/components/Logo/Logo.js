import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	color: var(--color-white);
	height: 100%;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.2rem;
	padding: 1rem;
`;

export const Logo = () => {
	return <LogoWrapper>Todo</LogoWrapper>;
};

export default Logo;
