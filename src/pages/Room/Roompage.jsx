import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const {roomId, name} = useParams();

const myMeet = async (element) => {
  const appId = 221093470;
  const serverSecret = "84eaac135ad775d852f8c064862ca029";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appId,
    serverSecret,
    roomId,
    Date.now().toString() ,
    name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container :element,
      sharedLinks : [
        {
          name : 'Copy Link',
          url : `http://localhost:3000/room/${roomId}/${name}`,
        }
      ],
      scenario : {
        mode : ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton : true
    })


}


  return (
    <div>
    <div  ref = {myMeet}/>
    </div>
  )
}

export default RoomPage
