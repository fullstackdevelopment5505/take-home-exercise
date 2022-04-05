import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';
import ColorPicker from "react-pick-color";

class TeamMember extends React.PureComponent {
  state = {
    bVisible: false,
    firstName: "",
    lastName: "",
    title: "",
    story: "",
    favoriteColor: "#3466F2",
    photoUrl: ""    
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string,
    isNew: PropTypes.bool,
    addNewMember: PropTypes.func
  };

  static defaultProps = {
    photoUrl: CodelitEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2',
    isNew: false,
    addNewMember: () => {}
  };

  handleChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setColor = (color) => {
    this.setState({
      favoriteColor: color
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title" onClick={() => {if(this.props.isNew) {this.setState({bVisible: true})}}}>{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
        </header>
        {
          this.state.bVisible && this.props.isNew ? (
            <div className="form-container">
              <input type="text" name='firstName' placeholder='first name' onChange={this.handleChange}/>
              <input type="text" name='lastName' placeholder='last name' onChange={this.handleChange}/>
              <input type="text" name='title' placeholder='title' onChange={this.handleChange}/>
              <textarea name="story" id="" cols="30" rows="10" placeholder='story' onChange={this.handleChange}></textarea>
              <input type="text" name='photoUrl' placeholder='photoUrl' onChange={this.handleChange}/>
              { 
                this.state.photoUrl == '' ? <></> : <img src={this.state.photoUrl} style={{width: '100%', height: '100px'}} alt="invalid image"/>
              }
              <ColorPicker color={this.state.favoriteColor} onChange={(color) => this.setColor(color.hex)} style={{width: '100%'}}/>
              <button onClick={() => {this.props.addNewMember(this.state)}}>add new member</button>
            </div>
          ) :  (
            <div className="body">{this.props.story}</div>
          )          
        }
        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TeamMember;
