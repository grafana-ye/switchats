import React from 'react';

class EnterChat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : ''
        }
    }

    changeUsername(e){
        e.preventDefault();
        if(this.state.username.length){
            this.props.setUsername(this.state.username);
        }else{
            alert('Please provide a username');
        }
    }

    onChange(e){
        this.setState({
            username : e.target.value
        })
    }

    render(){
        return(
            <div className="enter-chat d-flex justify-content-center align-items-center">
                    <form className="col-xs-12 col-sm-12 col-md-6 col-lg-4 chooseForm" onSubmit={this.changeUsername.bind(this)}>
                        <div class="row text-center">
                            <div class="col-sm formName">
                                <label for="name" dir="rtl">בחר שם:</label>
                            </div>
                        </div>
                        <React.Fragment>
                            
                                <div class="row text-center">
                                    <div class="col-sm">
                                        <div className="input-group">
                                            <input
                                                dir="rtl"
                                                className="form-control"
                                                placeholder="הקלד שם..."
                                                value={this.state.username}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <div className="input-group-append">
                                            <button
                                                className="btn-grad"
                                                type="submit">
                                                חפש צאט
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                        </React.Fragment>
                    </form>      
            </div>
        )
    }
}

export default EnterChat;