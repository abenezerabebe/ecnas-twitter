import React from "react";
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { graphql } from "gatsby";
import Page from "../components/Page";
import StoryblokService from "../utils/storyblok-service";

export const query = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      name
      content
      full_slug
      uuid
    }
  }
`;

export default class extends React.Component {
  state = {
    story: {
      content: JSON.parse(this.props.data.storyblokEntry.content)
    }
  };

  async getInitialStory() {
    StoryblokService.setQuery(this.props.location.search);
    const {
      data: { story }
    } = await StoryblokService.get(
      `cdn/stories/${this.props.data.storyblokEntry.full_slug}`
    );
    return story;
  }

  async componentDidMount() {
    let story = await this.getInitialStory();
    if (story.content) this.setState({ story });
    setTimeout(() => StoryblokService.initEditor(this), 200);
  }

  render() {
    return (
      <>
        <Helmet
          script={[
            {
              src: `//app.storyblok.com/f/storyblok-latest.js?t=${StoryblokService.token}`,
              type: "text/javascript"
            }
          ]}
        />
        <Helmet
          script={[
            {
              innerHTML: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
              type: "text/javascript"
            }
          ]}
        />
        <Container style={{ maxWidth: 754 }}>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Click to Tweet
            </Typography>
            <Page blok={this.state.story.content} />
          </Box>
        </Container>
      </>
    );
  }
}
