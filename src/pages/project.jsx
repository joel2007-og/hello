import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <ul>
        <li>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">Project 1</a>
        </li>
        <li>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">Project 2</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}