import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Heading } from './heading'

const StyledHeader = styled.div`
  background-color: coral;
  margin-bottom: 1.45rem;
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderWrapper>
      <Heading>
        <LinkStyled to={'/'}>{siteTitle}</LinkStyled>
      </Heading>
    </HeaderWrapper>
  </StyledHeader>
)

export default Header
