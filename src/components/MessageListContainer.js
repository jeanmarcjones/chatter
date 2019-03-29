import { connect } from 'react-redux'
import MessageList from './MessageList'

const mapStateToProps = ({ message }) => ({
  // Converts object to array so we can use map
  messages: message.allIds.map((key) => message.byId[key])
})

export default connect(mapStateToProps)(MessageList)
