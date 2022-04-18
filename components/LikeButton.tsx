import { logGAEvent } from "../utils/firebase-front";

export default function LikeButton(props) {

    const logGALikeEvent = (memeName) => {
  
        logGAEvent('select_content', {
            content_type: 'like',
            content_id: `${memeName}_like`
        });
    }

    return (
        <button className="btn btn-block btn-primary" onClick={() => logGALikeEvent(props.memeName)}>
            <i className="fa fa-thumbs-up">Like</i>
        </button>
    );
}