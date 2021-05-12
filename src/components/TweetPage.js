import React, {Component} from 'react'  
import { connect } from "react-redux";
import NewTweet from './NewTweet'
import Tweets from './Tweets'

class TweetPage extends Component {
    render() {
        const {id, replies } = this.props
        return (
            <div>
                <Tweets id={id} />
                <NewTweet id={id} />
                {replies.length !== 0 && <h3 className="center">Replies</h3>}
                <ul>
                    {replies.map((replyId) => (
                        <li key={replyId}>
                            <Tweets id={replyId} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({authedUsers, users, tweets}, props) {
    const {id}=props.match.params
    console.log(props)
    return {
        id,
        replies: !tweets[id]
                ? []
                :tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}
export default connect(mapStateToProps)(TweetPage)