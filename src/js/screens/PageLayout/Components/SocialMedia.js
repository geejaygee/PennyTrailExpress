import React, { Component, PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';

//Icons
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialYoutubeIcon from 'grommet/components/icons/base/SocialYoutube';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';

export default class SocialMedia extends Component {
	
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
		<Box size={{"width":"small"}} justify="end" align="end">
			<Box direction="row" >
				<Box basis="1/3" align="center" direction="row" justify="end">
					<Box margin={{"Horizontal":"large"}}>
						<Anchor icon={<SocialFacebookIcon size="medium"/>} />
					</Box>
					<Box margin={{"Horizontal":"large"}}>
						<Anchor icon={<SocialYoutubeIcon size="medium" colorIndex="accent-2"/>} />
					</Box>
					<Box margin={{"Horizontal":"large"}}>
						<Anchor icon={<SocialLinkedinIcon size="medium"/>} />
					</Box>
				</Box>
			</Box>
		</Box> 
	)
  }
}

