import React, { Component } from 'react'

import './index.css'

export default class Sticky extends Component {
  placeholderRef = React.createRef()
  contentRef = React.createRef()

  handleScroll = () => {
    const placeholderDom = this.placeholderRef.current
    const contentDom = this.contentRef.current

    // 获取 placeholderDom 距离顶部的间距
    const { top } = placeholderDom.getBoundingClientRect()

    // 如果占位div已经滚出屏幕顶部了
    if (top < 0) {
      placeholderDom.style.height = `${this.props.contentHeight}px`
      contentDom.classList.add('dzh_react_sticky_fixed')
    } else {
      // 占位div又回到屏幕里面了
      placeholderDom.style.height = '0px'
      contentDom.classList.remove('dzh_react_sticky_fixed')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <div>
        {/* 这是一个占位的div,刚开始高度为0 */}
        <div ref={this.placeholderRef}></div>

        {/* 这个就是内部部分 */}
        <div ref={this.contentRef}>{this.props.children}</div>
      </div>
    )
  }
}

Sticky.defaultProps = {
  contentHeight: 40
}
