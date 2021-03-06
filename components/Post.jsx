
var React = require('react')
var CrossPosted = require('./CrossPosted.jsx')
var Issues = require('./Issues.jsx')
var TweetButton = require('./TweetButton.jsx')

var Post = React.createClass({

  propTypes: {
    params: React.PropTypes.object,
    posts: React.PropTypes.array
  },

  render: function () {
    var post = this.props.post
    var crossposted = post.crossposted
    var body = { __html: post.html }
    return (
      <div className='py2'>
        <div
          className='prose mb3'
          dangerouslySetInnerHTML={body} />
        <CrossPosted links={crossposted} />
        <Issues title={post.title} />
        <div className='mt3'>
          <TweetButton {...this.props} />
        </div>
      </div>
    )
  }

})

module.exports = Post

