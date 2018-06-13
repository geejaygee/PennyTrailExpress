import React, { Component, PropTypes } from 'react';

import SocialMedia from './Components/SocialMedia';


import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';

export default class PageFooter extends Component {
	
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
	  <Footer>
		<Box colorIndex="brand" full="horizontal" margin="none" align="center" pad={{"vertical":"small", "horizontal":"medium"}}>
		  <Box direction="row" justify="between" full="horizontal">
			<Box align="start">
				<Box align="end" flex={true} >
					Telephone: (731) 217-6579
					<Box>
						(731) 267-0828
					</Box>
				</Box>
				Email: queries@pennytrailexpress.com
			</Box>
			<Box>
				Penny Trail Express, Inc.
				<br/>
				709 Evergreen Trail
				<br/>
				Madison, Tn. 37115
			</Box>
			<Box>
				<SocialMedia/>
			</Box>
		  </Box>
			<Box justify="between" direction="row" size={{"width":"large"}} pad={{"horizontal":"large"}}>
				<Box>
					Copyright © All Rights Reserved
				</Box>
				<Box>
					USP# 8757646
				</Box>
			</Box>
		</Box>
	  </Footer>
	)
  }
}

