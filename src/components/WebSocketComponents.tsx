// WebSocketComponent.tsx
import React, { useEffect, useRef } from "react";

interface WebSocketComponentProps {
  onNewOrder: (notificationMessage: string) => void;
}

interface WebSocketComponentState {
  sendMessage: (message: string) => void;
}

const WebSocketComponent: React.FC<WebSocketComponentProps> = ({
  onNewOrder,
}) => {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // WebSocket 연결
    socketRef.current = new WebSocket(`ws://${window.location.host}/socket`);

    // 연결이 열렸을 때
    socketRef.current.onopen = () => {
      console.log("Connected to WebSocket");
    };

    // 연결이 닫혔을 때
    socketRef.current.onclose = () => {
      console.log("Disconnected from WebSocket");
    };

    // 메시지를 받았을 때
    socketRef.current.onmessage = (event) => {
      const notificationMessage: string = JSON.parse(event.data);
      onNewOrder(notificationMessage);
    };

    // 에러가 발생했을 때
    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    return () => {
      // 컴포넌트가 언마운트될 때 WebSocket 연결 닫기
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [onNewOrder]);

  // sendMessage 함수 추가
  const sendMessage: WebSocketComponentState["sendMessage"] = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    }
  };
  const state: WebSocketComponentState = { sendMessage };

  // WebSocketComponent에 sendMessage 함수 추가
  return null;
};

export default WebSocketComponent;
