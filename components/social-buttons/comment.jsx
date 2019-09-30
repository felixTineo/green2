import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import './social.scss';


class Comment extends Component{
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentPop: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }


  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handlePop() {
    const { commentPop } = this.state;
    this.setState({ commentPop: !commentPop });
  }

  render(){
    const { commentPop, comment } = this.state;
    const { className } = this.props;
    return(
      <div className="comment_cont">
        <button title="Comentar" id="btn_comment" onClick={this.handlePop} className={`btn_social animated ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" />
          </svg>
        </button>
        <Popover placement="bottom" target="btn_comment" isOpen={commentPop}>
          <PopoverBody>
            <form>
              <textarea
                style={{
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                }}
                value={comment}
                className="text_area_comment"
                onChange={this.handleChange}
                name="commet"
                id="comment"
                cols="15"
                rows="5"
              />
              <button className="send_comment" type="submit">enviar</button>
            </form>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
};

export default Comment;
