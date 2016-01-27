var React = require('react');
var Router = require('react-router');
var Input = require('./input.js');
var classNames = require('classnames');
var Button = require('./button-small');

var CharacterInfo = React.createClass({

    getInitialState: function () {
        return {
            lblCharacterName: ''
        }
    },

    renderRows: function () {
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    },

    createTableDataHeaders: function () {
        return (
            <tr>
                <th>Name</th>
                <th>stamina</th>
                <th>achievements</th>
            </tr>
        );
    },

    getSearchButtonProps: function () {
        return ({
            className: this.getSearchButtonClass(),
            type: 'button',
            onClick: this.handleBtnClick
        });
    },

    handleBtnClick: function () {
        alert('yea');
    },

    getSearchButtonClass: function () {
        var classes = {
            'btn': true,
            'btn-default': false,
            'btn-md': true
        };

        return classNames(classes);
    },

    getInputCharacterProps: function () {
      return ({
          placeholder: 'Character name',
          ref: 'characterNameInput',
          onChange: this.handleInputChange
      });
    },

    handleInputChange: function () {
        var txt = this.refs.characterNameInput.getDOMNode().value;
        this.setState ({
            lblCharacterName: txt
        });
    },

    render: function () {

        var infoClass = classNames({
           display: (this.props.infoVisible? 'hidden': 'block'),
           'table-responsive': true
        });

        return (
            <div className= {infoClass}>
                <header>
                    <h3>Character Info .. : </h3>
                </header>

                <div className="col-md-8 pull-right">
                    {this.state.lblCharacterName}
                    <table className="table table-striped" >
                        <thead>
                            {this.createTableDataHeaders()}
                        </thead>
                        <tbody>
                            {this.createTableBodyNodes}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-4 pull-left">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="inputCharacterName">Name</label>
                            <Input {...this.getInputCharacterProps()}  />
                            <Button {...this.getSearchButtonProps()} />
                        </div>
                    </form>
                </div>

            </div>
        );
    }

});

module.exports = CharacterInfo;
