import React, { Component, PropTypes } from 'react';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Quote from 'grommet/components/Quote';
import Section from 'grommet/components/Section';
import Split from 'grommet/components/Split';
import Video from 'grommet/components/Video';

export default class Home extends Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
		<Section pad="none" margin="none">
			<Box pad={{"bottom":"small"}} align="center">
				<Heading tag="h2" style={{"fontFamily":"signpainter, Gotham book"}} strong={true}>Penny Trail Express, Inc.</Heading>
				<Heading tag="h3">Transport 4 Two</Heading>
			</Box>
			<Box size={{"height":"medium"}}>
				<Box direction="row">
					<Box pad={{"horizontal":"medium"}}>
						<iframe width="700" height="384" src="https://www.youtube.com/embed/2PSfOmdy9UE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</Box>
					<Box size={{"height":"auto"}} flex={true}>
						<Quote borderColorIndex="brand" size="full" flex={true}>
							<Heading tag="h4" style={{"fontFamily":"signpainter, Gotham book"}} strong={true}>
								THE PRODUCT
							</Heading>
							<Paragraph size="medium" pad="none" margin="none">
								Penny Trail Express, Inc. introduces the Transport 4 Two.  The Transport 4 Two is a double occupancy transport chair that allows one caregiver to transport two people at the same time.
								<br/>
								<br/>
								The Transport 4 Two is easy to push and maneuver, easily goes over thresholds, contains ultra-durable material, fits through door frames, is collapsible, takes about 30 seconds to break down or set up, and fits in most SUVs.
							</Paragraph>
						</Quote>
					</Box>
				</Box>
			</Box>
			<Box direction="row" pad={{"vertical":"medium", "between":"small"}}>
				<Quote borderColorIndex="brand" size="full" flex={true}>
					<Heading tag="h4" style={{"fontFamily":"signpainter, Gotham book"}} strong={true}>
						THE COMPANY
					</Heading>
					<Paragraph size="medium" pad="none" margin="none">
						Penny Trail Express, Inc. is a woman founded, American produced, and family owned business. Lead by CEO, Lisa Coleraine, Penny Trail Express, Inc. values the experience of keeping families, couples, and friends together by creating a positive experience for transporting two walking-impaired people.
					</Paragraph>
				</Quote>
				<Quote borderColorIndex="brand" size="full" flex={true}>
					<Heading tag="h4" style={{"fontFamily":"signpainter, Gotham book"}} strong={true}>
						THE USES
					</Heading>
					<Paragraph size="medium" pad="none" margin="none">
						Penny Trail Express, Inc. created the Transport 4 Two out of need for our 80+ year old grandparents. However, it has multiple uses and functionality. Think about the Sandwich Generation where someone might be taking care of their parent or spouse and a child at the same time. It could be commercialized in Airports, Nursing and Assisted Living Homes Amusement Parks and Hospitals. The Transport 4 Two makes caregiving more easy and productive by letting one person care for two people.
					</Paragraph>
				</Quote>
				<Quote borderColorIndex="brand" size="full" flex={true}>
					<Heading tag="h4" style={{"fontFamily":"signpainter, Gotham book"}} strong={true}>
						THANK YOU
					</Heading>
					<Paragraph size="medium" pad="none" margin="none">
						Thank you for visiting our website to learn more about Penny Trail Express, Inc and our product Transport 4 Two.
					</Paragraph>
				</Quote>	
			</Box>
		</Section>
	)
  }
}

