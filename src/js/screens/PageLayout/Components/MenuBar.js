import React, { Component, PropTypes } from 'react';

import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';

//Icons
import HomeIcon from 'grommet/components/icons/base/Home';
import ArticleIcon from 'grommet/components/icons/base/Article';
import TrophyIcon from 'grommet/components/icons/base/Trophy';
import GroupIcon from 'grommet/components/icons/base/Group';
import AccessWheelchairIcon from 'grommet/components/icons/base/AccessWheelchair';
import AchievementIcon from 'grommet/components/icons/base/Achievement';
import OrganizationIcon from 'grommet/components/icons/base/Organization';
import GalleryIcon from 'grommet/components/icons/base/Gallery';
import CameraIcon from 'grommet/components/icons/base/Camera';
import PlayIcon from 'grommet/components/icons/base/Play';
import LikeIcon from 'grommet/components/icons/base/Like';
import BlogIcon from 'grommet/components/icons/base/Blog';
import AccessWheelchairActiveIcon from 'grommet/components/icons/base/AccessWheelchairActive';
import MailOptionIcon from 'grommet/components/icons/base/MailOption';


export default class MenuBar extends Component {
	
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
	  <Section pad="none" margin="none">
		<Box justify="between" alignContent="between" pad={{"between":"large"}} direction="row" flex={true} responsive={true} align="center">
			<Box margin={{"width":"small"}}>
				<Anchor href="/">
					<Menu label="Home" icon={<HomeIcon/>} responsive={true}/>
				</Anchor>
			</Box>
			<Box margin={{"width":"medium"}}>
				<Menu label="About Us" icon={<OrganizationIcon/>} responsive={true}>
				  <Anchor href="/">Company Story <ArticleIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/">Product Story <AccessWheelchairIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/">Our Team <GroupIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/">Our Awards <AchievementIcon colorIndex="brand"/></Anchor>
				</Menu>
			</Box>
			<Box margin={{"width":"medium"}}>
				<Menu label="Media" icon={<GalleryIcon />} responsive={true}>
				  <Anchor href="/Home2">Pictures <CameraIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/Home2">Videos <PlayIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/Home2">Social Media <LikeIcon colorIndex="brand"/></Anchor>
				  <Anchor href="/Home2">Blog <BlogIcon colorIndex="brand"/></Anchor>
				</Menu>
			</Box>
			<Box margin={{"width":"medium"}}>
				<Anchor href="/">
					<Menu label="Buy" icon={<AccessWheelchairActiveIcon/>} responsive={true}/>
				</Anchor>
			</Box>
			<Box margin={{"width":"medium"}}>
				<Anchor href="/">
					<Menu label="Contact Us" icon={<MailOptionIcon/>} responsive={true}/>
				</Anchor>
			</Box>
		</Box>
	  </Section>
	)
  }
}

