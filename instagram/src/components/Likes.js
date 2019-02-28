import React from 'react';
import PropTypes from 'prop-types';

class Likes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
        likes: props.likes,
        isLiked: false
      }
    }
  
    addLike = () => {
        this.setState({
            isLiked: !this.state.isLiked,
            likes: this.state.isLiked  === false ? this.state.likes + 1 : this.state.likes - 1
        })
    }

  
  render() {
  
    return (

        <div>
            <div className='instaIcons'>
              <i id='icon' onClick={this.addLike} className="far fa-heart"></i>
              <i id='icon' className="far fa-comment"></i>
            </div>

            <div className='instaFooter'>
              <p className='likes'>{`${this.state.likes} likes`}</p>
            </div>
        </div>)
        
  }
  }
  
  Likes.propTypes = {
    likes: PropTypes.number.isRequired
  }
  
  export default Likes;
  