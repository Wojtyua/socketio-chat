import React from "react";
import "./Join-room.styles.scss";

function JoinRoom() {
  return (
    <div className="join-container">
      <header className="join-header">
        <h1>Join Room</h1>
      </header>
      <main className="join-main">
        <form className="join-form">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="input"
              placeholder="Enter username..."
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="room">Room Code</label>
            <input
              type="text"
              name="roomCode"
              id="roomCode"
              className="input"
              placeholder="Enter room code..."
              required
            />
          </div>
          <button type="submit" className="btn">
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
}

export default JoinRoom;
