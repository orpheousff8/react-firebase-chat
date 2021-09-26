import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseSetup";
import { Container } from "@chakra-ui/react";
import { Nav } from "./Nav";
import { SignIn } from "./SignIn";
import { ChatRoom } from "./ChatRoom";

const App: FC = (): JSX.Element => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header style={{ margin: "0px 3px 16px 3px" }}>
        <Nav />
      </header>
      <Container>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </Container>
    </div>
  );
};

export default App;
