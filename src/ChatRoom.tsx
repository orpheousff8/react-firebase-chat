import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import firebase from "firebase/compat";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "./firebaseSetup";
import { HStack, IconButton, Input } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ChatMessage } from "./ChatMessage";
import { getUserInfo } from "./lib/user";

export const ChatRoom: FC = (): JSX.Element => {
  const dummy = useRef<null | HTMLElement>(null);
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = getUserInfo(auth);

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              currentUserUid={getUserInfo(auth).uid}
            />
          ))}

        <span ref={dummy} />
      </main>

      <form onSubmit={sendMessage}>
        <HStack>
          <Input
            value={formValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormValue(e.target.value)
            }
            placeholder="say something nice"
          />
          <IconButton
            aria-label="submit"
            colorScheme="blue"
            type="submit"
            disabled={!formValue}
            icon={<ChevronRightIcon />}
          />
        </HStack>
      </form>
    </>
  );
};
