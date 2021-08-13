import React from 'react';

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="form-inner" ref={this.props.containerRef}>
                    <h2>註冊</h2>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" name="name" id="name" autoComplete="new-password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" autoComplete="new-password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密碼</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <input type="submit" value="註冊" />
                </div>
            </form>
        );
    }
}

export default Register;