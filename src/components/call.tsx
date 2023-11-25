"use client";
import '@livekit/components-styles';
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
} from '@livekit/components-react';
import {useUser} from "@clerk/nextjs";
import { useEffect, useState } from 'react';

const Page = ({ video }:{video:boolean}) =>{
  // TODO: get user input for room and name
  const room = "quickstart-room";
  const name = "quickstart-user";
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          `/livekit?room=${room}&username=${name}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <LiveKitRoom
      video={video}
      audio={true}
      
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: '100dvh' }}
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <VideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      {/* <ControlBar /> */}
    </LiveKitRoom>
  );
}
export default Page;

// function MyVideoConference() {
//   // `useTracks` returns all camera and screen share tracks. If a user
//   // joins without a published camera track, a placeholder track is returned.
//   const tracks = useTracks(
//     [
//       { source: Track.Source.Camera, withPlaceholder: true },
//       { source: Track.Source.ScreenShare, withPlaceholder: false },
//     ],
//     { onlySubscribed: false },
//   );
//   return (
//     <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
//       {/* The GridLayout accepts zero or one child. The child is used
//       as a template to render all passed in tracks. */}
//       <ParticipantTile />
//     </GridLayout>
//   );
// }