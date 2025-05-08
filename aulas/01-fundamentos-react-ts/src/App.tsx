import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/56198906?v=4",
      name: "Cordeiro Luis",
      role: "Software Developer"
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat."
      },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2025-05-01 09:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/33294549?v=4",
      name: "Pedro Massango",
      role: "Google Developer Expert"
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat."
      },
      { type: "link", content: "👉 jane.design/doctorcare" }
    ],
    publishedAt: new Date('2025-04-10 09:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
           {posts.map(post => {
            return (
               <Post 
                 key={post.id}
                 author={post.author}
                 content={post.content} 
                 publishedAt={post.publishedAt}
               />
            )
           })}
        </main>
      </div>
    </>
  );
}
