import React, { Component, PropTypes } from 'react';

import MenuBar from './Components/MenuBar';
import SocialMedia from './Components/SocialMedia';

import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
const logo = '../../../img/HeaderImage_2.png';

//Icons
import HomeIcon from 'grommet/components/icons/base/Home';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialYoutubeIcon from 'grommet/components/icons/base/SocialYoutube';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';

export default class PageHeader extends Component {
	
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
	  <Section align="center" alignContent="center">
		<Box direction="row" full="horizontal">

			<Box size={{"width":"small"}}/>
			<Box size={{"width":"1/2"}} flex={true} align="center" justify="center">
			  <Image src={logo}/>
			</Box>
			<SocialMedia/>
		</Box>
		<Box colorIndex="brand" full="horizontal" pad={{"horizontal":"small"}} margin="none" align="center" justify="center">
			  <MenuBar/>
		</Box>
		  
	  </Section>
	)
  }
}

