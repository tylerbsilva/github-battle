var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return ( props.isLoading === true
  ? <Loading text="One Sec" speed="300" />
  : <MainContainer>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header='Player One'>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Player Two'>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12">
          <button type="button" className="btn btn-success" onClick={props.onInitiateBattle} style={styles.space}>
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12">
          <Link to='/playerOne'>
            <button type="button" className="btn btn-danger" style={styles.space}>Restart</button>
          </Link>
        </div>
      </div>
    </MainContainer>
  )
}

ConfirmBattle.PropTypes = {
  isLoading : PropTypes.bool.isRequired,
  onInitiateBattle : PropTypes.func.isRequired,
  playersInfo : PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
