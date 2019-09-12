import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native'
import config from '../app.json'

const normalizeNextElements = `
html,
body,
#__next {
  height: 100%;
  font-family: Roboto, sans-serif;
}

@import url("https://fonts.googleapis.com/css?family=Roboto");

@font-face {
  src: url(/static/MaterialIcons.ttf);
  font-family: MaterialIcons;
}  
`

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(config.name)
    const page = renderPage()

    const styles = [<style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />, getStyleElement()]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
