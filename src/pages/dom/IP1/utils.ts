import { useEffect } from 'react';
import { useArray } from 'cb-hooks';

const createPeerConnection = (onNewIp: (ip: string) => void) => {
  const PeerConnection =
    window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection;
  const peerConnection = new PeerConnection({ iceServers: [] });
  const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
  const ipList: { [ip: string]: true } = {};

  const iterateIp = (ip: string) => {
    if (!ipList[ip]) onNewIp(ip);
    else ipList[ip] = true;
  };

  peerConnection.createDataChannel('');

  peerConnection.createOffer().then(sessionDescriptionInit => {
    console.log('sdp', sessionDescriptionInit.sdp);

    sessionDescriptionInit.sdp?.split('\n').forEach(line => {
      if (line.indexOf('candidate') < 0) return;
      line.match(ipRegex)?.forEach(iterateIp);
    });
  });

  peerConnection.onicecandidate = ice => {
    console.log('candidate', ice.candidate?.candidate);
    ice.candidate?.candidate.match(ipRegex)?.forEach(iterateIp);
  };

  return peerConnection;
};

export const useUserIp = () => {
  const [ips, , prepend] = useArray<string>([]);

  useEffect(() => {
    const peerConnection = createPeerConnection(prepend);
    return () => peerConnection.close();
  }, [prepend]);

  return ips;
};
