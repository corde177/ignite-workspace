import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGV2ZWxvcGVyfGVufDB8fDB8fHww"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/56198906?v=4" />
        <strong>Cordeiro Luis</strong>
        <span>Software Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar Seu Perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
